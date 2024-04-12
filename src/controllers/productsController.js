const fs = require("fs");
const path = require("path");


const productsFilePath2 = path.join(
  __dirname,
  "../data/productsarmatuequipo.json"
);
const productsarmatuequipos = JSON.parse(
  fs.readFileSync(productsFilePath2, "utf-8")
);
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require("../database/models");

const controller = {
  todos_los_productos: (req, res) => {

    const type = req.query.type;

    const options = {}

    if(type) {
      options.where = {
        typeproductsId: type
      }
    }

    db.Products.findAll({
      include : ["category", "materials", "capabilitie", "typeproducts",'colors' ],
      ...options

  }
     
      )
    
      .then((products) => {
        return res.render("products/productos", {
          products,
          toThousand,
        });
      })
      .catch((error) => console.log(error));
  },

  detail:  (req, res) => {

    const productId = req.params.id;
   
  db.Products.findByPk(productId, {
    include : ['category', 'materials','capabilitie','typeproducts','colors']

  })
    .then(products => {
      if (!products) {
        return res.status(404).send('Producto no encontrado');
      }

      res.render('products/detail', { products,toThousand,
       });
    }) 
   
    .catch(error => console.log(error));
},

  mates_personalizados: (req, res) => {
    return res.render("products/mates_personalizados");
  },
   

  arma_tu_equipo: (req, res) => {
   
   
    db.Products.findAll(
      {
        include : ['category', 'materials','capabilitie','typeproducts','colors' ]
    }
       )
     
       .then((products) => {
     
         return res.render("products/arma_tu_equipo", {
           products,
           toThousand,
           productsarmatuequipos,
          
         });
       })
     
       .catch((error) => console.log(error)); 
   
  },

  arma_tu_equipo2: (req, res) => {
    db.Products.findAll(
      {
        include : ['category', 'materials','capabilitie','typeproducts','colors' ]
    }
       )
     
       .then((products) => {
         return res.render("products/arma_tu_equipo2", {
           products,
           toThousand,
           productsarmatuequipos,
         });
       })
       .catch((error) => console.log(error)); 
    
  },

  arma_tu_equipo3: (req, res) => {
    db.Products.findAll(
      {
        include : ['category', 'materials','capabilitie','typeproducts','colors' ]
    }
       )
     
       .then((products) => {
         return res.render("products/arma_tu_equipo3", {
           products,
           toThousand,
           productsarmatuequipos,
         });
       })
    
  },
  arma_tu_equipo4: (req, res) => {
    db.Products.findAll(
      {
        include : ['category', 'materials','capabilitie','typeproducts','colors' ]
    }
       )
     
       .then((products) => {
         return res.render("products/arma_tu_equipo4", {
           products,
           toThousand,
           productsarmatuequipos,
         });
       })
       .catch((error) => console.log(error)); 
    
  },
  arma_tu_equipo5: (req, res) => {
    db.Products.findAll(
      {
        include : ['category', 'materials','capabilitie','typeproducts','colors' ]
    }
       )
     
       .then((products) => {
         return res.render("products/arma_tu_equipo5", {
           products,
           toThousand,
           productsarmatuequipos,
         });
       })
       .catch((error) => console.log(error)); 
    
  },
  diseñatuequipo: (req, res) => {
    db.Products.findAll(
      {
        include : ['category', 'materials','capabilitie','typeproducts','colors' ]
    }
       )
     
       .then((products) => {
         return res.render("products/diseña_tu_equipo", {
           products,
           toThousand,
           productsarmatuequipos,
         });
       })
       .catch((error) => console.log(error)); 
    
  },
};
module.exports = controller;
