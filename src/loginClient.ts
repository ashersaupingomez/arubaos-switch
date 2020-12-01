import { Request, SuperAgentStatic, SuperAgentRequest } from 'superagent';

/**
 * Login a client, enabling it to make requests thereafter.
 *
 * This needs to be called before any requests are made.
 * @private
 * @param client - ArubaOS-Switch REST API client
 * @param username - Switch username
 * @param password - Switch password
 * @example
 * await loginClient();
 */
export default function loginClient(
  client: SuperAgentStatic & Request,
  userName: string = process.env.ARUBA_OS_SWITCH_USERNAME || 'manager',
  password: string = process.env.ARUBA_OS_SWITCH_PASSWORD || '',
): SuperAgentRequest {
  return client
    .post('/login-sessions')
    .send({ userName, password });
}
