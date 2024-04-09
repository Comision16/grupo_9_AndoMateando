"use strict";

const productsJSON = require("../../data/products.json");

const product_colorskDB = productsJSON.map((product) => {
  return {

    productsId:product.id,
    colorId: product.color== "negro" ? 1 : product.color == "blanco" ? 2 : product.color == "rojo" ? 3 : product.color == "marron" ? 4 : product.color == "azul" ? 5 : product.color == "amarillo" ? 6 : product.color == "naranja" ? 7 : product.color == "gris" ? 8 :product.color == "verde" ? 9 :product.color == "violeta" ? 10 :product.color == "celeste" ? 11 : 12,
    createdAt: new Date(),
    updatedAt: new Date()
  };
});
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "product_colors",
      product_colorskDB,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_colors", null, {});
  },
};