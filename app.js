const express = require('express');
//BABY, ESTAMOS INVOCANDO EXPRESS
const app = express();
//BABY, IMPORTANDO SEETALERT
const Swal = require('sweetalert2');
//MOTOR DE PLANTILLA
app.set('view engine', 'ejs'); 

app.use(express.urlencoded({extended:false}));
//app.use(express(json));


// CONDIGURANDO LA CARPETA PUBLICA
app.use(express.static(__dirname + "/public"));



// LLAMANDO AL ROUTER
app.use('/', require('./router'));

//INVOCANDO METODOS DE EXPRESS
app.listen(process.env.PORT || 3000);
console.log('Server escuchando en el puerto http://localhost:3000');