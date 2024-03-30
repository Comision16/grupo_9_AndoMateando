const express = require("express");
const upload = require("../middlewares/upload");

const {
  getAllProducts,
  getOneProduct,
  createProduct,
} = require("../controllers/apis/productsApiController");
const {
  getAllUsuarios,
  getOneUsuarios,
} = require("../controllers/apis/usuariosApiController");
const router = express.Router();

/* /apis */
router.get("/productos", getAllProducts);
router.get("/productos/:id", getOneProduct);
router.get("/usuarios", getAllUsuarios);
router.get("/usuarios/:id", getOneUsuarios);
router.post(
  "/productos",
  upload.fields([
    {
      name: "image",
    },
  ]),
  createProduct
);
module.exports = router;
