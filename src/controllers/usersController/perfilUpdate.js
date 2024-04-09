const { validationResult } = require("express-validator");
const fs = require("fs");
const db = require('../../database/models');
const { where } = require("sequelize");

module.exports = (req, res) => {
    const errors = validationResult(req);
    const { id } = req.session.userLogin;
  
    if (errors.isEmpty()) {
      const {
    
        name,
        surname,
        email,
        password,
        age,
        phone,
      } = req.body;
  
      db.User.create({
        
        name,
        surname,
        email,
        password,
        age,
        phone,
      },{
        where : req.params.id
      })
     
        .then(() => {
           
            return res.redirect("/usuarios/perfil");
          
        })
        .catch((error) => console.log(error));
    } 
  
  };
  