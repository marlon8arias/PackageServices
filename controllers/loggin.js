exports.validar = (req, res)=> {
    const user = req.body.user;
    const pass = req.body.pass;

    console.log(user);
    console.log(pass);

    if(user == 'user' && pass == 1234){
        console.log("Usted tiene acceso");
        res.redirect('/welcome');
    }else{
        console.log("Acceso denegado");
    }
}