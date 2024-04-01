const createError = require("http-errors");
const db = require("../../database/models");

const storeImages = async (images) => {
  try {
    await db.Image.bulkCreate(images, {
      validate: true,
    });

    return "Las imágenes se almacenaron correctamente";
  } catch (error) {
    return createError(500, error.message);
  }
};

module.exports = {
  storeImages,
};
