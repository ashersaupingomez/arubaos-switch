module.exports = function getHostname(client) {
  return client
    .get('/system')
    .then(({ body }) => body.name);
};
