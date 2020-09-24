module.exports = function logout(client) {
  return client
    .delete('/login-sessions');
};
