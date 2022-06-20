const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const mensajeNombre = document.getElementById('mensajeNombre');
const mensajeApellido = document.getElementById('mensajeApellido');
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}
const validarFormulario = (e) => {
    switch (e.target.name){
        case "nombre":
           validarInputNombre(expresiones.nombre, e.target);
           console.log(e.target.name);
        breack;
        case "apellido":
            validarInputApellido(expresiones.apellido, e.target);
            console.log(e.target.name);
        breack;
        case "direccion":
            validarCampo(expresiones.nombre, e.target);
            console.log(e.target.name);
        breack;
        case "peso":
            validarCampo(expresiones.nombre, e.target);
        breack;

    }
}

const validarInputNombre = (expresion, input) =>{
    if(expresion.test(input.value)){
        console.log(inputs.nombre);
    }else{
        console.log("Algo anda mal");
        //mensajeNombre.innerHTML = "Algo va mal, ingresa un valor valido.";
        Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un problema',
            text: 'El nombre que intentas registrar es invalido.',
            footer: '<a href="/problems/validaNombreError">¿Por qué tengo este problema?</a>',
            confirmButtonText: 'Aceptar'
          })

        let inputNombre = inputs[0].value = "";
        console.log(inputNombre);
        inputNombre.innerHTML = inputNombre;
        
    }
}
const validarInputApellido = (expresion, input) =>{
    if(expresion.test(input.value)){
        console.log(inputs.nombre);
    }else{
        console.log("Algo anda mal");
        //mensajeNombre.innerHTML = "Algo va mal, ingresa un valor valido.";
        Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un problema',
            text: 'El apellido que intentas registrar es invalido.',
            footer: '<a href="/problems/validaApellidoError">¿Por qué tengo este problema?</a>',
            confirmButtonText: 'Aceptar'
          })

        let inputNombre = inputs[1].value = "";
        console.log(inputNombre);
        inputNombre.innerHTML = inputNombre;
        
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    //input.addEventListener('blur', validarFormulario);
});
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Se presione el boton guardar");
});