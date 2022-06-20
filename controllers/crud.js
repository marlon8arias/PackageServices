
const conexion = require('../database/db'); 

exports.save = (req, res)=> {
    const nombre = req.body.nombre;
    const rol = req.body.rol;
    const apellido = req.body.apellido;
    const direccion = req.body.direccion;
    const description = req.body.description;
    const peso = req.body.peso;
    const costo_total = req.body.costo_total;

    //BABY, 
    conexion.query('INSERT INTO users SET ?', {nombre:nombre, apellido:apellido, direccion:direccion, description:description, peso:peso, costo_total:costo_total, rol:rol}, (error, results)=> {
        if(error){
            console.log(error);
        }else{
            res.redirect('/welcome');
        }
    })
}


//VAMOS A ACTUALIZAR 
exports.update = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const direccion = req.body.direccion;
    const description = req.body.description;
    const rol = req.body.rol;


    conexion.query('UPDATE users SET ? WHERE id = ?', [{nombre:nombre, apellido:apellido,direccion:direccion, description:description, rol:rol}, id], (error, results) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/index');
        }
    })
}

exports.buscar = (req, res)=>{
    const guia = req.body.guia;

    conexion.query('SELECT *  FROM  users WHERE id = ?', [guia], (error, results) => {
        if(error){
            console.log(error);
        }else{
            res.render('ventanaCliente', {user:results[0]});
        }
    })
}

