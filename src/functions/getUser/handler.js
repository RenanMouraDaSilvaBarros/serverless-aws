const { listAllUsers } = require("./listAllUserCase/index");

const listAll = async (event) => {
  return listAllUsers(event);
};

module.exports = { listAll }
