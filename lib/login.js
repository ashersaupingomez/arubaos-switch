module.exports = function login(
  client,
  userName = process.env.ARUBA_OS_SWITCH_USERNAME,
  password = process.env.ARUBA_OS_SWITCH_PASSWORD,
) {
  return client
    .post('/login-sessions')
    .send({ userName, password });
};
