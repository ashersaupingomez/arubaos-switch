/**
 * Login a client.
 * @param {superagent.Agent} client
 * @param {string} userName
 * @param {string} password
 * @returns {Promise<superagent.Response>} Login response from switch
 * @example <caption>Using defaults</caption>
 * const response = await login(client);
 * @example <caption>Using explicit credentials</caption>
 * const response = await login(client, 'john', 'doe');
 */
module.exports = function login(
  client,
  userName = process.env.ARUBA_OS_SWITCH_USERNAME || 'manager',
  password = process.env.ARUBA_OS_SWITCH_PASSWORD || '',
) {
  return client
    .post('/login-sessions')
    .send({ userName, password });
};
