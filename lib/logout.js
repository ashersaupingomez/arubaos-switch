/**
 * Logout a client.
 * @param {superagent.Agent} client
 * @returns {Promise<superagent.Response>}
 * @example
 * await logout(client);
 */
module.exports = function logout(client) {
  return client
    .delete('/login-sessions');
};
