const { agent } = require('superagent');
const prefix = require('superagent-prefix');

/**
 * Create a client.
 * @param {string} host Switch IP address
 * @param {string} version REST API version
 * @returns {superagent.Agent}
 * @example <caption>Using defaults</caption>
 * const client = createClient();
 * @example <caption>Using explicit parameters</caption>
 * const client = createClient('10.11.12.13', 'v7');
 */
module.exports = function createClient(
  host = process.env.ARUBA_OS_SWITCH_HOST,
  version = process.env.ARUBA_OS_SWITCH_VERSION || 'v1',
) {
  return agent()
    .use(prefix(`http://${host}/rest/${version}`));
};
