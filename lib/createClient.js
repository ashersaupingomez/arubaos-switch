const { agent } = require('superagent');
const prefix = require('superagent-prefix');

/**
 * @param {string} host IP address of switch
 * @param {string} version ArubaOS-Switch REST API version
 * @returns {superagent.agent} ArubaOS-Switch REST API client
 * @example
 * const client = createClient('10.11.12.13', 'v7');
 */
module.exports = function createClient(
  host = process.env.ARUBA_OS_SWITCH_HOST,
  version = process.env.ARUBA_OS_SWITCH_VERSION || 'v1',
) {
  return agent()
    .use(prefix(`http://${host}/rest/${version}`));
};
