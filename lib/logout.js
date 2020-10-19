/**
 * Logout a client.
 * @param {superagent.Agent} client
 * @returns {Promise<superagent.Response>} Logout response from switch
 * @example
 * const response = await logout(client);
 */
module.exports = function logout(client) {
  return client
    .delete('/login-sessions');
};
