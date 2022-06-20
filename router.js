const express = require('express');
const router = express.Router();

//BABY, estamos invocando nuestro archivo de conexion
const conexion = require('./database/db');

router.get('/',(req,res)=> {
    //BABY, MOSTRAMOS TODOS LOS REGISTROS DE LA BASE DE DATOS
    conexion.query('SELECT * FROM users', (error, results)=> {
        if(error){
            throw error;
        }else{
            // BABY, indicamos la vista que tendra el usuario
            res.render('welcome',{results:results});
        }
    })
})

//RUTA PARA EDITAR LOS REGISTROS
router.get('/edit/:id', (req, res)=> {
    const id = req.params.id; 
    conexion.query('SELECT * FROM  users WHERE id=?', [id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.render('edit', {user:results[0]});
        }
    })
})
//BABY, VAMOS A ELIMINAR UN REGISTRO
router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
})
//BABY, MANEJAREMOS LA CREACION DE REGISTROS
router.get('/create', (req, res)=> {
    res.render('create');
})
// BABY, LE ESTAMOS DICIENDO AL SERVIDOR QUE ESTÁ RUTA EXISTE
router.get('/admin', (req, res)=>{
    res.render('admin');
})
// BABY, LE DECIMOS AL SERVIDOR QUE PUEDE UTILIZAR LA RUTA INDEX
router.get('/index',(req,res)=> {
    //BABY, MOSTRAMOS TODOS LOS REGISTROS DE LA BASE DE DATOS
    conexion.query('SELECT * FROM users', (error, results)=> {
        if(error){
            throw error;
        }else{
            // BABY, indicamos la vista que tendra el usuario
            res.render('index',{results:results});
        }
    })
})
// BABY, ESTA ES EL BLOQUE PARA LOS SERVICIOS
router.get('/services', (req, res)=>{
    res.render('services');

})
// BABY, ESTA ES LA RUTA PARA EL BLOQUE SOBRE NOSOTROS
router.get('/nosotros', (req, res) => {
    res.render('nosotros');
})

// BABY, LE DECIMOS AL SERVIDOR QUE PUEDE UTILIZAR LA RUTA INDEX
router.get('/monitoreo',(req,res)=> {
    res.render('monitoreo');
})

router.get('/problems/validaNombreError', (req, res) =>{
    res.render('problems/validaNombreError');
})
router.get('/problems/validaApellidoError' , (req, res) => {
    res.render('problems/validaApellidoError');
})
    //BABY, MOSTRAMOS TODOS LOS REGISTROS DE LA BASE DE DATOS
    router.get('/ventanaClinete',(req,res)=> {
        //BABY, MOSTRAMOS TODOS LOS REGISTROS DE LA BASE DE DATOS
        conexion.query('SELECT * FROM users', (error, results)=> {
            if(error){
                throw error;
            }else{
                // BABY, indicamos la vista que tendra el usuario
                res.render('ventanaCliente',{results:results});
            }
        })
    })

// BABY, ESTE ES LA RUTA PARA EL BLOQUE DE LOGGGIN
router.get('/loggin', (req, res)=> {
    res.render('login');
})
router.get('/welcome', (req,res)=>{
    res.render('welcome');
})


const crud = require('./controllers/crud');
const loggin = require('./controllers/loggin');
const { Router } = require('express');

router.post('/save', crud.save);
router.post('/update', crud.update);
router.post('/loggin', loggin.validar);
router.post('/buscar', crud.buscar);

module.exports = router;