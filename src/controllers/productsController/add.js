const db = require("../../database/models");

module.exports = (req, res) => {
  const categories = db.Category.findAll({ 
    order: ["name"],
    attributes : ['id','name']
  });
  const materiales = db.Material.findAll({ order: ["name"] }); // Obtener todos los materiales
  const compatibilities = db.Capabilitie.findAll({ order: ["name"] }); // Obtener datos de la tabla 4
  const typeproductes = db.Typeproducts.findAll({ order: ["name"] }); // Obtener datos de la tabla 4
  const colors = db.Color.findAll({ order: ["name"] }); // Obtener todos los colores


  Promise.all([categories, materiales, compatibilities, typeproductes, colors])
    .then(([categories, materiales, compatibilities, typeproductes, colors]) => {
      return res.render("products/product-add", {
        categories,
        materiales,
        compatibilities,
        typeproductes,
        colors
      });
    })

    .catch((error) => console.log(error));


};
