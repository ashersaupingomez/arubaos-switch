/**
 * Note: must be performed before any requests
 * @param {superagent.agent} client ArubaOS-Switch REST API client
 * @param {string} username Username of switch user
 * @param {string} password Password of switch user
 * @returns {superagent.Request} Login request for ArubaOS-Switch REST API
 * @example
 * await loginClient(client, 'rick', 'wubba lubba dub-dub');
 */
module.exports = function loginClient(
  client,
  userName = process.env.ARUBA_OS_SWITCH_USERNAME || 'manager',
  password = process.env.ARUBA_OS_SWITCH_PASSWORD || '',
) {
  return client
    .post('/login-sessions')
    .send({ userName, password });
};
