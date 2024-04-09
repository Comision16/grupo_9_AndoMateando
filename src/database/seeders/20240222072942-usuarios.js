"use strict";

const usuariosJSON = require("../../data/users.json");

const usersDB = usuariosJSON.map((user, index) => {
  return {
    name: user.name,
    surname: user.surname,
    email: user.email,
    password: user.password,
    roleId: user.role == "admin" ? 1 : 2,
    age: user.age,
    phone: user.phone,
    
    createdAt: new Date(),
    updatedAt: new Date(),
  };
});
const bcryptjs = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",usersDB,{}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
