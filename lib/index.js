const createClient = require('./createClient');
const getHostname = require('./getHostname');
const getLLDPNeighbours = require('./getLLDPNeighbours');
const getMACTable = require('./getMACTable');
const login = require('./login');
const logout = require('./logout');
const useClient = require('./useClient');

module.exports = {
  createClient,
  getHostname,
  getLLDPNeighbours,
  getMACTable,
  login,
  logout,
  useClient,
};
