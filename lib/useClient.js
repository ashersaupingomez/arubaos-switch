const loginClient = require('./loginClient');
const logoutClient = require('./logoutClient');

/**
 * Login a client, execute a function using the client, then logout the client,
 * returning the value of the function.
 *
 * This is a simpler method than explicitly using `loginClient` & `logoutClient`,
 * which is the typical workflow.
 * @param {superagent.agent} client ArubaOS-Switch REST API client
 * @param {function} fn Function which only accepts a `client` parameter
 * @param {string} username Username of switch user
 * @param {string} password Password of switch user
 * @returns {Promise<any>} Return value of `fn`
 * @example <caption>Define a function:</caption>
 * function getHostname(client) {
 *   return client
 *     .get('/system')
 *     .then(({ body }) => body.name);
 * }
 * @example <caption>Pass `client` & the function into `useClient`:</caption>
 * const hostname = await useClient(client, getHostname, 'rick', 'wubba lubba dub-dub');
 * @example <caption>This is equivalent to:</caption>
 * await loginClient(client, 'rick', 'wubba lubba dub-dub');
 *
 * const hostname = await getHostname(client);
 *
 * await logoutClient(client);
 */
module.exports = function useClient(client, fn, username, password) {
  return loginClient(client, username, password)
    .then(() => fn(client))
    .finally(() => logoutClient(client));
};
