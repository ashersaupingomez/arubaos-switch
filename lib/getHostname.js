/**
 * Get the hostname of the switch
 * @param {superagent.Agent} client
 * @returns {Promise<string>}
 * @example
 * const hostname = await getHostname(client);
 */
module.exports = function getHostname(client) {
  return client
    .get('/system')
    .then(({ body }) => body.name);
};
