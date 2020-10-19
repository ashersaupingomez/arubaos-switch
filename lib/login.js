/**
 * Login a client.
 * @param {*} client
 * @param {*} userName
 * @param {*} password
 * @returns {superagent.Agent}
 * @example <caption>Using defaults</caption>
 * await login(client);
 * @example <caption>Using explicit credentials</caption>
 * await login(client, 'john', 'doe');
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
