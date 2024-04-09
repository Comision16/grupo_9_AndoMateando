const { validationResult } = require("express-validator");
const db = require("../../database/models");
const { hashSync } = require("bcryptjs");

module.exports = processRegister = (req, res) => {
  const errors = validationResult(req);
  const { name, surname, email, password } = req.body;

  if (errors.isEmpty()) {
    db.Address.create()
      .then((address) => {
        db.User.create({
          name,
          surname,
          email,
          password: hashSync(password.trim(), 10),
          roleId: 2,
        }).then((user) => {
          console.log(user);
          return res.redirect("/usuarios/ingreso");
        });
      })
      .catch((error) => console.log(error));
  } else {
    return res.render("users/register", {
      old: req.body,
      errors: errors.mapped(),
    });
  }
};