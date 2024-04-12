const fs = require("fs");
const path = require("path");
const { Op } = require("sequelize");

const db = require("../database/models");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = {
  index: (req, res) => {
    db.Products.findAll({
      include: ["category", "materials", "capabilitie", "typeproducts"],
    })
      .then((products) => {
        //return res.send(products)
        return res.render("index", {
          products,
          toThousand,
        });
      })
      .catch((error) => console.log(error));
  },

  todos_los_productos2: (req, res) => {
    return res.render("products/productos2", {
      products,
      toThousand,
    });
  },
  cart: (req, res) => {
    return res.render("productCart", {
      toThousand,
    });
  },
  mateartips: (req, res) => {
    return res.render("extras/mateartips");
  },
  preguntas_frecuentres: (req, res) => {
    return res.render("extras/preguntas_frecuentes");
  },

  contacto: (req, res) => {
    return res.render("extras/contacto");
  },

  terminos_y_condiciones: (req, res) => {
    return res.render("extras/terminos_y_condiciones");
  },
  admin: (req, res) => {
    db.Products.findAll({
      include: ["category", "materials", "capabilitie", "typeproducts"],
    })
      .then((products) => {
        //return res.send(products)
        return res.render("dashboard", {
          products,
        });
      })
      .catch((error) => console.log(error));
  },
  searchAdmin: (req, res) => {
    const { keyword } = req.query;

    db.Products.findAll({
      where: {
        name: {
          [Op.substring]: keyword,
        },
      },
      include: ["category", "materials", "capabilitie", "typeproducts"],
    })
      .then((result) => {
        return res.render("dashboard", {
          products: result,
          keyword,
         
        });
      })
      .catch((error) => console.log(error));
  },
  searchAdmin2: (req, res) => {
    const { keyword } = req.query;

    db.Products.findAll({
      where: {
        name: {
          [Op.substring]: keyword,
        },
      },
      include: ["category", "materials", "capabilitie", "typeproducts"],
    })
      .then((result) => {
        return res.render("products/productos", {
          products: result,
          keyword,
          toThousand,
        });
      })
      .catch((error) => console.log(error));
  },
};
