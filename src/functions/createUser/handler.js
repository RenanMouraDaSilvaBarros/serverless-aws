"use strict";

const { create } = require("./createUserCase/index");

const createUser = async (event) => {
  return create(event);
};

module.exports = { createUser }
