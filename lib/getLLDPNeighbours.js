module.exports = function getLLDPNeighbours(client) {
  return client
    .get('/lldp/remote-device')
    .then(({ body }) => body.lldp_remote_device_element);
};
