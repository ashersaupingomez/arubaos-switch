const { agent } = require('superagent');
const prefix = require('superagent-prefix');

module.exports = function createClient(
  host = process.env.ARUBA_OS_SWITCH_HOST,
  version = process.env.ARUBA_OS_SWITCH_VERSION || 'v1',
) {
  return agent()
    .use(prefix(`http://${host}/rest/${version}`));
};
