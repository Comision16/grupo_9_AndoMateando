require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieCheck = require("./middlewares/cookieCheck");
const paginate = require("express-paginate");

var indexRouter = require("./routes/index.routes");
var usersRouter = require("./routes/users.routes");
const productsRouter = require("./routes/products.routes");
const apisRouter = require("./routes/apis.routes");

const transferLocals = require("./middlewares/transferLocals");
const checkUserLogin = require("./middlewares/checkUserLogin");

var app = express();

// view engine setup
app
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .use(methodOverride("_method"))
  .use(logger("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, "..", "public")))

  /* configuracion session */

  .use(
    session({
      secret: "Ando Mateando!!",
      resave: true,
      saveUninitialized: true,
    })
  )
  .use(cookieCheck)
  .use(transferLocals)

  .use(paginate.middleware(10, 50))
  /* --------------------- RUTAS ----------------- */

  .use("/", indexRouter)
  .use("/usuarios", usersRouter)
  .use("/productos", productsRouter)
  .use("/apis", apisRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(cookieCheck).use(transferLocals);
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
