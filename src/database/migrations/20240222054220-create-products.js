"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      discount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      image: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
      type: Sequelize.STRING,
      allowNull: true,
    
    },
    imagenes: {
      type: Sequelize.STRING,
      allowNull: false,
    
    },
    quantityInStock: {
>>>>>>> 4a9d987f86edfd75654f7a74809ef676ff8e7233
=======
>>>>>>> b97b600c6010528ba174cb998bd23efcea2e7d38
        type: Sequelize.STRING,
        allowNull: true,
      },
      quantityInStock: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tamanio: {
        type: Sequelize.STRING,
        allowNull: true,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b97b600c6010528ba174cb998bd23efcea2e7d38
      },
      color: {
        type: Sequelize.STRING,
        allowNull: true,
<<<<<<< HEAD
=======
      
>>>>>>> 4a9d987f86edfd75654f7a74809ef676ff8e7233
=======
>>>>>>> b97b600c6010528ba174cb998bd23efcea2e7d38
      },
      quantityInStock: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "Categories",
          },
        },
      },
      colorsId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "Colors",
          },
        },
      },
      typeproductsId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "Typeproducts",
          },
        },
      },
      compatibilitieId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "Capabilities",
          },
        },
      },
      materialsId: {
        type: Sequelize.INTEGER,

        allowNull: true,
        references: {
          model: {
            tableName: "Materials",
          },
        },
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
