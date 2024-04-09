"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Colors",
      [
        {
          name: "negro",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "blanco",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "rojo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "marron",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "azul",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "amarillo",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "naranja",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "gris",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "verde",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "violeta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "celeste",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "bronce",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "plateado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "dorado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "Marron",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "Marron Claro",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "Marron Oscuro",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name: "Sin Definir ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Colors", null, {});
  },
};
