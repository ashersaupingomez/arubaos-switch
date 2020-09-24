import { agent } from 'superagent';
import prefix from 'superagent-prefix';

export default function createClient(
  host = process.env.ARUBA_OS_SWITCH_HOST,
  version = process.env.ARUBA_OS_SWITCH_VERSION || 'v1',
) {
  return agent()
    .use(prefix(`http://${host}/rest/${version}`));
}
