import baretest from 'baretest';
import { doesNotReject } from 'assert';

import { useClient } from './index.js';

const test = baretest('arubaos-switch');

function requestGetSystem(client) {
  return client
    .get('/system');
}

test('all works', () => doesNotReject(useClient({ fn: requestGetSystem })));

test.run();
