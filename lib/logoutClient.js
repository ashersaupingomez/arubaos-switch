/**
 * Note: must be performed after requests
 * @param {superagent.agent} client ArubaOS-Switch REST API client
 * @returns {superagent.Request} Logout request for the ArubaOS-Switch REST API
 * @example
 * await logoutClient(client);
 */
module.exports = function logoutClient(client) {
  return client
    .delete('/login-sessions');
};
