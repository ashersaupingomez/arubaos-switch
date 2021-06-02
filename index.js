import { agent } from 'superagent';

const {
  ARUBA_OS_SWITCH_HOST,
  ARUBA_OS_SWITCH_VERSION,
  ARUBA_OS_SWITCH_USERNAME,
  ARUBA_OS_SWITCH_PASSWORD,
} = process.env;

const DEFAULT_HOST = ARUBA_OS_SWITCH_HOST;
const DEFAULT_VERSION = ARUBA_OS_SWITCH_VERSION || 'v1';
const DEFAULT_USERNAME = ARUBA_OS_SWITCH_USERNAME || 'manager';
const DEFAULT_PASSWORD = ARUBA_OS_SWITCH_PASSWORD || '';

export function getRequestPrefix(host = DEFAULT_HOST, version = DEFAULT_VERSION) {
  return `http://${host}/rest/${version}`;
}

export function createClient(host = DEFAULT_HOST, version = DEFAULT_VERSION) {
  return agent()
    .use((request) => { request.url = getRequestPrefix(host, version) + request.url; });
}

export function loginClient({ client, userName = DEFAULT_USERNAME, password = DEFAULT_PASSWORD }) {
  return client
    .post('/login-sessions')
    .send({ userName, password });
}

export function logoutClient(client) {
  return client
    .delete('/login-sessions');
}

export function useClient({
  host = DEFAULT_HOST,
  version = DEFAULT_VERSION,
  client = createClient(host, version),
  userName = DEFAULT_USERNAME,
  password = DEFAULT_PASSWORD,
  fn,
}) {
  return loginClient({ client, userName, password })
    .then(() => fn(client))
    .finally(() => logoutClient(client));
}
