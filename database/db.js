const mysql = require('mysql');

// CREANDO LA CONEXION A LA BASE DE DATOS
const conexion  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs_db'
});

conexion.connect((error)=> {
    if(error){
        console.error('BABY, ha ocurrido un problema en la conexión a la base de datos: '+error);
        return
    }
    console.log('BABY, correctamente conectaddo a la base de datos');
    
})

module.exports = conexion;