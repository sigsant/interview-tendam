import { Expresiones } from "./clases.js";

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

// Oculta los divs de eleccion de compra

const ocultar = bloque =>{
    document.querySelector(bloque).style.display = "none";
};

// Muestra en bloque los divs de eleccion de compra

const mostrar = bloque =>{
    document.querySelector(bloque).style.display = "block";
};

document.querySelector('#paypal').onclick = () =>{
    ocultar("#pay-card");
    ocultar('.fig-card');
    mostrar('#pay-paypal');
    mostrar('.fig-pay');
};

document.querySelector('#visa').onclick = () =>{
    ocultar('#pay-paypal');
    ocultar('.fig-pay');
    mostrar('#pay-card');
    mostrar('.fig-card');
};

document.querySelector('button').onclick = validar;

// TODO Refactorizar
// Llama a la clase que contiene la validación mediante Regex

function validar(){
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
}