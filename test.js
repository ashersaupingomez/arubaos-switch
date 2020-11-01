const baretest = require('baretest');
const assert = require('assert');

const {
  createClient,
  getHostname,
  getLLDPNeighbours,
  getMACTable,
  useClient,
} = require('./lib');
const { name } = require('./package');

const test = baretest(name);

const client = createClient();

test('getHostname works', async () => {
  const hostname = await useClient(client, getHostname);

  assert(typeof hostname === 'string');
});

test('getLLDPNeighbours works', async () => {
  const neighbours = await useClient(client, getLLDPNeighbours);

  assert(Array.isArray(neighbours));
});

test('getMACTable works', async () => {
  const macs = await useClient(client, getMACTable);

  assert(Array.isArray(macs));
});

test.run();
