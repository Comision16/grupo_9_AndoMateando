const db = require("../../database/models");

const storeProduct = async (data) => {
  try {
    const [
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
    ] = data;

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

    const productCustom = {
      ...product.dataValues,
      image: `${req.protocol}://${req.get("host")}/images/productos/${
        product.image
      }`,
      category: product.category.name,
      typeproducts: product.typeproducts.name,
    };

    return productCustom;
  } catch (error) {
    return error;
  }
};

module.exports = {
  storeProduct,
  getProduct,
};
