"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Materials",
      [
        {
          name: "Madera",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Plastico",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "Metal",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "Aluminio",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "Vidrio",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, 
        {
          name: "Hierbas",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "Tela",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "Acero",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Acero Inoxidable",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Acero Inox",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alpaca",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "Cobre",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "Bronce",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "Cuero",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "Semi Cuero",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "matelasse",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "Cuero Eco",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "Poliéster",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "Sin Especificar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
