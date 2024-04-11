const { validationResult } = require("express-validator");
const { existsSync, unlinkSync } = require("fs");
const db = require("../../database/models");


module.exports = (req, res) => {
  const image = req.files.mainImage;
  const images = req.files.images;
  const {
    typeproductsId,
    name,
    materialsId,
    brand,
    categoryId,
    price,
    colorId,
    quantityInStock,
    compatibilitieId,
    tamanio,
    discount,
    description,
  } = req.body;
  const { id } = req.params;

  const errors = validationResult(req);
  console.log(errors)

  if (!errors.isEmpty()) {
    db.Products.findByPk(id,{
      include : ['images']
  }).then((resto) => {
    db.Products.update(
    {
        typeproductsId,
        name,
        materialsId,
        brand,
        categoryId,
        price,
        colorId,
        quantityInStock,
        compatibilitieId,
        tamanio,
        discount,
        description,
    },
    {
      where: {
        id,
      },
    }
  ).then(() => {
      if (images) {
          resto.images.forEach((image) => {
            existsSync("public/images/" + image.file) &&
              unlinkSync("public/images/" + image.file);
          });

          db.Image.destroy({
              where : {
                productsId : id
              }
            }).then(() => {
              const imagesDB = images.map(image => {
                  return {
                      file: image.filename,
                      productsId : resto.id
                  }
              }) 

              db.Image.bulkCreate(imagesDB, {
                  validate : true
              }).then(result => {
                  console.log(result);
                  return res.redirect("/admin");
              })
            })
          }else {
            return res.redirect("/admin");

          }       
  })
}).catch(error => console.log(error));
} else {
image &&
existsSync("public/images/" + image.filename) &&
unlinkSync("public/images/" + image.filename);

if (images) {
images.forEach((image) => {
  existsSync("public/images/" + image) &&
    unlinkSync("public/images/" + image);
});
}


const resto = db.Products.findByPk(id, {
    include : ['category','typeproducts','materials','capabilitie']
})
const categories = db.Category.findAll({
    order: [['name']]
})
const typeproductes = db.Typeproducts.findAll({
    order: [['name']]
})
const materiales = db.Material.findAll({
    order: [['name']]
})
const compatibilities = db.Capabilitie.findAll({
    order: [['name']]
})
const colors = db.Color.findAll({
  order: [['name']]
})
    Promise.all([resto, categories, typeproductes, materiales,compatibilities, colors])
    .then(([resto, categories, typeproductes,materiales,compatibilities, colors]) => {
        return res.render('products/product-edit',{
            ...resto.dataValues,
            categories,
            typeproductes,
            materiales,
            compatibilities,
            colors
        })
    })
    .catch(error => console.log(error))

}
}  