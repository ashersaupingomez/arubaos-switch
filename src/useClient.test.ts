/* eslint-disable import/no-extraneous-dependencies */
import baretest from 'baretest';
import { doesNotReject } from 'assert';
import type { Request, SuperAgentStatic, SuperAgentRequest } from 'superagent';

import useClient from './useClient';

const test = baretest('arubaos-switch');

/**
 * @private
 * @param client - ArubaOS-Switch REST API client
 * @returns Request for switch to get current user info
 */
function requestGetSystem(client: SuperAgentStatic & Request): SuperAgentRequest {
  return client
    .get('/system');
}

/**
 * Note: a `.env` file is required at the root of this package for tests to work.
 *
 * `useClient` relies on the other 3 functions to work correctly.
 * Therefore, if it is working correctly, the others are also.
 *
 * This test resolves if a `200` HTTP status code is received from the switch.
 * Otherwise, the promise rejects.
 * @private
 */
test('everything works', () => doesNotReject(useClient(requestGetSystem)));

test.run();
