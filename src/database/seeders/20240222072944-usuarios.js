"use strict";

const bcryptjs = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
         {
          name: "Admin",
          surname: "AndoMateando",
          email: "admin@gmail.com",
          password: bcryptjs.hashSync(process.env.PASSWORD_ADMIN, 10),
          roleId: 1,
          age:40,
          phone: 33451561,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User",
          surname: "AndoMateando",
          email: "user@gmail.com",
          password: bcryptjs.hashSync(process.env.PASSWORD_ADMIN, 10),
          roleId: 2,
          age:40,
          phone: 3364515025,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
