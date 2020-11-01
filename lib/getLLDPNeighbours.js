/**
 * Get a list of neighbours via LLDP
 * @param {superagent.Agent} client
 * @returns {Promise<array<object>>}
 * @example
 * const neighbours = await getLLDPNeighbours(client);
 */
module.exports = function getLLDPNeighbours(client) {
  return client
    .get('/lldp/remote-device')
    .then(({ body }) => body.lldp_remote_device_element);
};
