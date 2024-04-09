const createError = require("http-errors");
const paginate = require("express-paginate");
const db = require("../../database/models");
const { getAllCategories } = require("../../services/categories");
const { storeProduct, getProduct } = require("../../services/products");
const { storeImages } = require("../../services/images");

const getAllProducts = async (req, res) => {
  try {
    const { count, rows } = await db.Products.findAndCountAll({
      include: [
        {
          association: "category",
          attributes: ["name"],
        },
        {
          association: "typeproducts",
          attributes: ["name"],
        },
      ],
      attributes: ["id", "name"],
      limit: req.query.limit,
      offset: req.skip,
    });

    const pagesCount = Math.ceil(count / req.query.limit);
    const currentPage = req.query.page;
    const pages = paginate.getArrayPages(req)(
      pagesCount,
      pagesCount,
      req.query.page
    );

    const products = rows.map((product) => {
      return {
        ...product.dataValues,
        detail: `${req.protocol}://${req.get("host")}/apis/products/${
          product.id
        }`,
      };
    });

    return res.status(200).json({
      ok: true,
      meta: {
        total: count,
        count: products.length,
        pages,
        currentPage,
      },
      products,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Error. Sorry!",
    });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const product = await getProduct(req.params.id, req);

    return res.status(200).json({
      ok: true,
      product: product,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Error. Sorry!",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const {
      typeproductsId,
      name,
      materialsId,
      brand,
      categoryId,
      price,
      color,
      quantityInStock,
      compatibilitieId,
      tamanio,
      discount,
      description,
    } = req.body;

    if ([name, description, price].includes("" || undefined))
      throw createError(
        400,
        "Los campos name, description, price , son obligatorios"
      );

    if (!categoryId)
      throw createError(400, "Debe indicar el ID de la categoría");

    const categories = await getAllCategories();

    if (!categories.map((category) => category.id).includes(+categoryId))
      throw createError(400, "La categoria no existe");

    const image = req.files.image;
    const images = req.files.images;

    const product = await storeProduct({
      name,
      brand,
      categoryId,
      typeproductsId,
      materialsId,
      price,
      color,
      quantityInStock,
      tamanio,
      discount,
      image: image ? image[0].filename : null,
      compatibilitieId,
      description,
    });

    const imageName = images ? images.map((image) => image.filename) : [];

    if (imageName.length) {
      const imagesDB = imageName.map((name) => ({
        file: name,
        id_product: product.id,
      }));

      await storeImages(imagesDB);
    }

    const newProduct = await getProduct(product.id, req);

    return res.status(200).json({
      ok: true,
      msg: "Producto cargado con exito!!!",
      product: newProduct,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Error. Sorry!",
    });
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
};
