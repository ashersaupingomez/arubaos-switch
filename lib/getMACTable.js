module.exports = function getMACTable(client) {
  return client
    .get('/mac-table')
    .then(({ body }) => body.mac_table_entry_element);
};
