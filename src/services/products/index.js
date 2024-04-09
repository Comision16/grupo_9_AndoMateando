const createError = require("http-errors");
const db = require("../../database/models");

const storeProduct = async (data) => {
  try {
    const {
      typeproductsId,
      name,
      materialsId,
      brand,
      categoryId,
      image,
      price,
      color,
      quantityInStock,
      compatibilitieId,
      tamanio,
      discount,
      description,
    } = data;

    const newProduct = await db.Products.create({
      name,
      typeproductsId,
      brand,
      categoryId,
      materialsId,
      price,
      color,
      quantityInStock,
      tamanio,
      discount,
      image,
      compatibilitieId,
      description,
    });

    return newProduct;
  } catch (error) {}

  console.log("New product created:", newProduct);
};

const getProduct = async (id, req) => {
  try {
    const product = await db.Products.findByPk(id, {
      include: [
        {
          association: "category",
          attributes: ["name"],
        },
        {
          association: "typeproducts",
          attributes: ["name"],
        },
        {
          association: "images",
          attributes: ["file"],
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "quantityInStock"],
      },
    });

    if (!product) {
      throw createError(404, "Producto no encontrado");
    }

    const productCustom = {
      ...product.dataValues,
      image: `${req.protocol}://${req.get("host")}/images/productos/${
        product.image
      }`,
      category: product.category ? product.category.name : null,
      typeproducts: product.typeproducts ? product.typeproducts.name : null,
    };

    return productCustom;
  } catch (error) {
    return createError(500, error.message);
  }
};

module.exports = {
  storeProduct,
  getProduct,
};
