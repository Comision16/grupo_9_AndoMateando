const db = require("../../database/models");

module.exports = async (req, res) => {
  const categories = db.Category.findAll({
    order: ["name"],
    attributes: ["id", "name"],
  });
  const materiales = await db.Material.findAll({ order: ["name"] }); // Obtener todos los materiales
  const compatibilities = await db.Capabilitie.findAll({ order: ["name"] }); // Obtener datos de la tabla 4
  const typeproductes = await db.Typeproducts.findAll({ order: ["name"] }); // Obtener datos de la tabla 4
  const colors = await db.Color.findAll({ order: ["name"] }); // Obtener todos los colores

  await Promise.all([
    categories,
    materiales,
    compatibilities,
    typeproductes,
    colors,
  ])
    .then(
      ([categories, materiales, compatibilities, typeproductes, colors]) => {
        return res.render("products/product-add", {
          categories,
          materiales,
          compatibilities,
          typeproductes,
          colors,
        });
      }
    )

    .catch((error) => console.log(error));
};
