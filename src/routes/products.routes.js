const express = require("express");

const {
  detail,
  mate,
  mates_personalizados,
  set_yerbero,
  super_combos,
  termos,
 
  todos_los_productos,
  arma_tu_equipo,
  arma_tu_equipo2,
  arma_tu_equipo3,
  arma_tu_equipo4,
 
} = require('../controllers/productsController');
const {
  add,
  edit,
 
} = require('../controllers/productsController/');
const router = express.Router();

/* /productos */

router
.get("/arma_tu_equipo", arma_tu_equipo)

.get("/arma_tu_equipo2", arma_tu_equipo2)
.get("/arma_tu_equipo3", arma_tu_equipo3)
.get("/arma_tu_equipo4", arma_tu_equipo4)
.get("/todos_productos", todos_los_productos)
.get("/detalle/:id/", detail)
.get("/mate", mate)
.get("/mates_personalizados", mates_personalizados)
.get("/set_yerbero", set_yerbero)
.get("/super_combos", super_combos)
.get("/termos", termos)

/*addmin*/
  .get("/agregar", add)
  .get("/editar/:id?", edit);

module.exports = router;
