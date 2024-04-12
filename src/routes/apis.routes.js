const express = require("express");
const upload = require("../middlewares/upload");

const {
  getAllProducts,
  getOneProduct,
  createProduct,
  getProductsByCategory,
  getProductsByType,
} = require("../controllers/apis/productsApiController");
const {
  getAllUsuarios,
  getOneUsuarios,
  checkEmail,
} = require("../controllers/apis/usuariosApiController");
const { addImageProduct, deleteImageProduct, changeImageProduct, getImagesByProduct } = require("../controllers/apis/imagesApiController");
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

router.get('/tipos/:idType/productos', getProductsByType)

router.get("/users/check-email", checkEmail);

router.post("/images/:idProduct", upload.any(), addImageProduct)
router.delete('/images/:idImage', deleteImageProduct)
router.post("/images/:idProduct/main", upload.any(),changeImageProduct)
router.get('/images/:idProduct', getImagesByProduct)


module.exports = router;
