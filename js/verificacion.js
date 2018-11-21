import { Expresiones } from "./clases.js";

// TODO Refactorizar
// Llama a la clase que contiene la validación mediante Regex

let validar = () => {
    let   nombre         = document.querySelector('#nombre');
    const nombreError    = document.querySelector('.nombre');
    let   apellido       = document.querySelector('#apellido');
    const apellidoError  = document.querySelector('.apellido');
    let   ciudad         = document.querySelector('#ciudad');
    const ciudadError    = document.querySelector('.ciudad');
    let   provincia      = document.querySelector('#provincia');
    const provinciaError = document.querySelector('.provincia');
    let   direccion      = document.querySelector('#direccion');
    const direccionError = document.querySelector('.direccion');
    let   zipCode        = document.querySelector('#zipCode');
    const zipCodeError   = document.querySelector('.zipCode');
   
    let validacion = new Expresiones();

    validacion.validarnombre(nombre, nombreError);
    validacion.validarnombre(apellido, apellidoError);
    validacion.validarnombre(ciudad, ciudadError);
    validacion.validarnombre(provincia, provinciaError);
    validacion.validarZip(zipCode, zipCodeError);
    validacion.validarDir(direccion, direccionError);
};

document.querySelector('button').onclick = validar;

/* Aparece el logo de visa a partir de una máscara: 
 * 
 *  XXXX XXXX XXXX XXXX
 */

document.querySelector("#card-number").onkeyup = () => {
    let regex        = new RegExp('^\\d{4}\\s+\\d{4}\\s+\\d{4}\\s+\\d{4}$');
    let campoTarjeta = document.querySelector("#card-number");
    
     (regex.test(campoTarjeta.value)) ? 
         campoTarjeta.classList.add('visa'): 
         campoTarjeta.classList.remove('visa');
};

document.querySelector('#paypal').onclick = () =>{
    document.querySelector('#pay-card').style.display   = "none";
    document.querySelector('#pay-paypal').style.display = "block";
};

document.querySelector('#visa').onclick = () =>{
    document.querySelector('#pay-paypal').style.display = "none";
    document.querySelector('#pay-card').style.display   = "block";
};

