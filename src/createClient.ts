/* eslint-disable no-return-assign */
import { agent } from 'superagent';
import type { Request, SuperAgentStatic } from 'superagent';

/**
 * Request URLs are prepended with the appropriate URL base,
 * so only REST API endpoints are required.
 * @param host - Switch IP address (typically)
 * @param version - ArubaOS-Switch REST API version
 * @returns ArubaOS-Switch REST API client
 * @example
 * const client = createClient();
 */
export default function createClient(
  host: string = process.env.ARUBA_OS_SWITCH_HOST!,
  version: string = process.env.ARUBA_OS_SWITCH_VERSION || 'v1',
): SuperAgentStatic & Request {
  return agent()
    .use((request) => request.url = `http://${host}/rest/${version + request.url}`);
}
