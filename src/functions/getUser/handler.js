const { listAllUsers } = require("./listAllUserCase/index");

const listAll = async (event, context, callback) => {
  return listAllUsers(event, context, callback);
};

module.exports = { listAll };
