import type { Request, SuperAgentStatic } from 'superagent';

import createClient from './createClient';
import loginClient from './loginClient';
import logoutClient from './logoutClient';

/**
 * @param fn - Function whose only parameter is `client`
 * @param client - ArubaOS-Switch REST API client
 * @param username - Switch username
 * @param password - Switch password
 * @returns Promise that resolves to the return value of `fn`
 * @example <caption>First, define a function which accepts & uses the `client` paramter</caption>
 * function requestGetSystem(client) {
 *   return client
 *     .get('/system');
 * }
 * @example <caption>Then, use the `useClient` function which returns the resolved value of `fn`</caption>
 * const response = await useClient(requestGetSystem);
 */
export default function useClient(
  fn: (client: SuperAgentStatic & Request) => any,
  client: SuperAgentStatic & Request = createClient(),
  userName: string = process.env.ARUBA_OS_SWITCH_USERNAME || 'manager',
  password: string = process.env.ARUBA_OS_SWITCH_PASSWORD || '',
): Promise<any> {
  return loginClient(client, userName, password)
    .then(() => fn(client))
    .finally(() => logoutClient(client));
};
