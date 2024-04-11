const express = require("express");
const {
  add,
  edit,
  create,
  update,
  remove,
} = require("../controllers/productsController/");
const upload = require("../middlewares/upload");
const productAddValidator = require("../validations/product-add-validator");
const productEditValidator = require("../validations/product-edit-validator");
const checkAdmin = require('../middlewares/checkAdmin')
const router = express.Router();

const {
  detail,

  mates_personalizados,
  
  

  todos_los_productos,
  arma_tu_equipo,
  arma_tu_equipo2,
  arma_tu_equipo3,
  arma_tu_equipo4,
  arma_tu_equipo5,
  diseñatuequipo,
} = require("../controllers/productsController");

/* /productos */

router

  .get("/arma_tu_equipo", arma_tu_equipo)

  .get("/arma_tu_equipo2", arma_tu_equipo2)

  .get("/arma_tu_equipo3", arma_tu_equipo3)
  .get("/arma_tu_equipo4", arma_tu_equipo4)
  .get("/arma_tu_equipo5", arma_tu_equipo5)
  .get("/todos_productos", todos_los_productos)

  .get("/detalle/:id", detail)
  
  .get("/mates_personalizados", mates_personalizados)


  .get("/tuequipo", diseñatuequipo)
  /*admin*/

  .get("/agregar",checkAdmin,  add)
  .post("/crear",
    upload.fields([
      {
        name: "mainImage",
      },
      {
        name: "images",
      },
    ]),
    productAddValidator,
    create
  )
  .get("/editar/:id", edit)
  .put(
    "/actualizar/:id",
    upload.fields([
      {
        name: "mainImage",
      },
      {
        name: "images",
      },
    ]),
    productEditValidator,
    update
  )
  .delete("/eliminar/:id", remove);

module.exports = router;
