const db = require("../../database/models");

const getAllCategories = async () => {
  try {
    const categories = await db.Category.findAll();

    return categories;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCategories,
};
