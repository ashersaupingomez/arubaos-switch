const login = require('./login');
const logout = require('./logout');

/**
 * Login, execute a function, then logout.
 * @param {superagent.Agent} client
 * @param {function} fn
 * @param {string} username
 * @param {string} password
 * @returns {Promise<any>} Return value of `fn`
 * @example <caption>`fn` function only accepts single `client` parameter</caption>
 * function getSystem(client) {
 *   return client
 *     .get('/system');
 * }
 * @example <caption>Using defaults</caption>
 * const system = await useClient(client, getSystem);
 * @example <caption>Using explicit parameters</caption>
 * const system = await useClient(client, getSystem, 'john', 'doe');
 */
module.exports = function useClient(client, fn, username, password) {
  return login(client, username, password)
    .then(() => fn(client))
    .finally(() => logout(client));
};
