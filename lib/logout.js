export default function logout(client) {
  return client
    .delete('/login-sessions');
}
