const { validationResult } = require("express-validator");
const fs = require("fs");
const db = require("../../database/models");

module.exports = (req, res) => {
  const errors = validationResult(req);

  const mainImage = req.files.mainImage;
  const images = req.files.images;


  if (errors.isEmpty()) {
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

    db.Products.create({
      typeproductsId,
      name,
      brand,
      categoryId,
      materialsId,
      price,
      color,
      quantityInStock,
      tamanio,
      discount,
      image: mainImage ? mainImage[0].filename : null,
      compatibilitieId,
      description,
    })
      .then((newProduct) => {
        this.images = images ? images.map((image) => image.filename) : [];
        if (images) {
          const imagesDB = images.map((image) => {
            return {
              name: image.filename,
              id_product: newProduct.id,
            };
          });
          db.Image.bulkCreate(imagesDB, {
            validate: true,
          }).then((result) => {
            console.log(result);
            return res.redirect("/admin");
          });
        } else {
          return res.redirect("/admin");
        }
      })
      .catch((error) => console.log(error));
  } else {
    if (mainImage) {
      fs.existsSync(`public/images/products/${mainImage[0].filename}`) &&
        fs.unlinkSync(`public/images/products/${mainImage[0].filename}`);
    }
    if (images) {
      images.forEach((image) => {
        fs.existsSync(`public/images/products/${image}`) &&
          fs.unlinkSync(`public/images/products/${image}`);
      });
    }

    const categories = db.Category.findAll({ 
      order: ["name"],
      attributes : ['id','name']
    });
    const materiales = db.Material.findAll({ order: ["name"] }); // Obtener todos los materiales
    const compatibilities = db.Capabilitie.findAll({ order: ["name"] }); // Obtener datos de la tabla 4
    const typeproductes = db.Typeproducts.findAll({ order: ["name"] }); // Obtener datos de la tabla 4
  
    Promise.all([categories, materiales, compatibilities, typeproductes])
      .then(([categories, materiales, compatibilities, typeproductes]) => {
        return res.render("products/product-add", {
          categories,
          materiales,
          compatibilities,
          typeproductes,
          old : req.body,
          errors : errors.mapped()
        });
      })
  
      .catch((error) => console.log(error));
  }
};
