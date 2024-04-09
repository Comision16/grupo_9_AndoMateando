/* Importaciones de modulos */
const express = require('express');
const path = require('path');
const app = express();

const PORT = 3030;

app.use(express.static(path.join(__dirname,'public')));

/* rutas */
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
/* Registro */
app.get('/register',(req,res) => res.sendFile(path.join(__dirname,'views','register.html')));
/*Logeate */
app.get('/login',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')));
/* Carro de compras */
app.get('/productCart',(req,res) => res.sendFile(path.join(__dirname,'views','productCart.html')));
/*Detalle del producto */
app.get('/productDetail',(req,res) => res.sendFile(path.join(__dirname,'views','detail.html')));
/*#mateartips*/
app.get('/#mateartips',(req,res) => res.sendFile(path.join(__dirname,'views','#mateartips.html')));
/*contacto */
app.get('/contacto',(req,res) => res.sendFile(path.join(__dirname,'views','contacto.html')));
/*mates_personalizados */
app.get('/mates_personalizados',(req,res) => res.sendFile(path.join(__dirname,'views','mates_personalizados.html')));
/*preguntas_frecuentes */
app.get('/preguntas_frecuentes',(req,res) => res.sendFile(path.join(__dirname,'views','preguntas_frecuentes.html')));
/*productos */
app.get('/productos',(req,res) => res.sendFile(path.join(__dirname,'views','productos.html')));
/*super_combos*/
app.get('/super_combos',(req,res) => res.sendFile(path.join(__dirname,'views','super_combos.html')));


/* Launcher */
app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`))


