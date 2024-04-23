'use strict';

const $registro = document.getElementById('registro');

const datosUsuario={
nombre: null,
apellidos: null,
email: null,
contraseña: null,
confirmContraseña: null,
};

let allowSubmit = false;

/* Realizo los eventos */

document.addEventListener('DOMContentLoaded', ()=>{
eventListenners();
});

/* Realizo las funciones */

function eventListenners() {

$registro.nombre.addEventListener('input', ()=>{
checkInput('nombre');
});

$registro.nombre.addEventListener('blur', ()=>{
    checkInput('nombre');
    });

$registro.apellido.addEventListener('input', ()=>{
    checkInput('apellido');
    });
        
$registro.apellido.addEventListener('blur', ()=>{
    checkInput('apellido');
    });
            
$registro.email.addEventListener('input', ()=>{
    checkInput('email');
    });
                
$registro.email.addEventListener('blur', ()=>{
    checkInput('email');
    });
                    
$registro.contraseña.addEventListener('input', ()=>{
    checkInput('contraseña');
    });
                        
$registro.contraseña.addEventListener('blur', ()=>{
     checkInput('contraseña');
    });
                            
$registro.confirmContraseña.addEventListener('input', ()=>{
    checkInput('confirmContraseña');
    });
                                
$registro.confirmContraseña.addEventListener('blur', ()=>{
    checkInput('confirmContraseña');
    });
                    
};

    


