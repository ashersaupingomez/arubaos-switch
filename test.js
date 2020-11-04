const baretest = require('baretest');
const assert = require('assert');
const { agent, Response } = require('superagent');

const { name } = require('./package');
const {
  createClient,
  loginClient,
  logoutClient,
  useClient,
} = require('./lib');

const test = baretest(name);

function getHostname(client) {
  return client
    .get('/system')
    .then(({ body }) => body.name);
}

const client = createClient();

test('createClient', () => assert(client instanceof agent));

test('loginClient', () => loginClient(client)
  .then((response) => assert(response instanceof Response)));

test('logoutClient', () => logoutClient(client)
  .then((response) => assert(response instanceof Response)));

test('useClient', () => useClient(client, getHostname)
  .then((hostname) => assert(typeof hostname === 'string')));

test.run();
