/**
 * Get a list of MAC table entries
 * @param {superagent.Agent} client
 * @return {Promise<array<object>>}
 * @example
 * const entries = await getMACTable(client);
 */
module.exports = function getMACTable(client) {
  return client
    .get('/mac-table')
    .then(({ body }) => body.mac_table_entry_element);
};
