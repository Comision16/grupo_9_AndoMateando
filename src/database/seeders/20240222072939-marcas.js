"use strict";

const productsJSON = require("../../data/products.json");

const marcasDB = productsJSON.map((products) => {
  return {
    name : products.marca,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Brands", marcasDB, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Brands", null, {});
  },
};
