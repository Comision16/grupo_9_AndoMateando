"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.hasMany(models.Image, {
        as: 'images',
        foreignKey : 'productsId'
      });
      Products.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categoryId",
      });
      Products.belongsTo(models.Typeproducts, {
        as: "typeproducts",
        foreignKey: "typeproductsId",
      });
     
      Products.belongsTo(models.Capabilitie, {
        as: "capabilitie",
        foreignKey: "compatibilitieId",
      });
      Products.belongsTo(models.Material, {
        as: "materials",
        foreignKey: "materialsId",
      }); 
    
    
    }
  }
  Products.init(
    {
      name:{  type : DataTypes.STRING,allowNull: true},
      description: { type : DataTypes.TEXT,allowNull: true},
      price:{  type : DataTypes.INTEGER,allowNull: true},
      discount: { type : DataTypes.INTEGER,allowNull: true},
      brand:{  type : DataTypes.STRING,allowNull: true},
      tamanio:{ type :  DataTypes.STRING,allowNull: true},
      color: { type : DataTypes.STRING,allowNull: true},
      image: { type : DataTypes.STRING,allowNull: true},
      quantityInStock:{ type :  DataTypes.STRING,allowNull: true},
      categoryId: { type : DataTypes.INTEGER,allowNull: true},
      typeproductsId: { type : DataTypes.INTEGER,allowNull: true},
      
      compatibilitieId:  {type : DataTypes.INTEGER,allowNull: true},
      materialsId:  {type : DataTypes.INTEGER,allowNull: true},
      
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
