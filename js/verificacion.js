const validarnombre = (item, item2) => {
    let regex = new RegExp('^[A-Za-z]+$');

    if(regex.test(item.value) && item.value.length >= 3){
        item2.classList.add('hidden');
        item.style.border = "1px solid green";
    }else{
        item2.classList.remove('hidden');
        item.style.border = "1px solid red";
    }
};

const validarZip = (zip, zip1) => {
    let regex = new RegExp('\\b\\d{5}\\b');
    
    if (regex.test(zip.value)){
        zip1.classList.add('hidden');
        zip.style.border = "1px solid green";
    }else {
        zip1.classList.remove('hidden');
        zip.style.border = "1px solid red";
    }
};

const validarDir = (dir, dir1) => {
    let regex = new RegExp('^[A-Za-z]+\\s[A-Z-a-z]+\\W+\\s[0-9]');
    
    if(dir.value != '' && regex.test(dir.value)){
        dir1.classList.add('hidden');
        dir.style.border = "1px solid green";
    }else{
        dir1.classList.remove('hidden');
        dir.style.border = "1px solid red";
    }
};

const validar = () => {
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
    validarnombre(nombre, nombreError);
    validarnombre(apellido, apellidoError);
    validarnombre(ciudad, ciudadError);
    validarnombre(provincia, provinciaError);
    validarZip(zipCode, zipCodeError);
    validarDir(direccion, direccionError);
};

document.querySelector('#info_number').onmouseover = () => {
    setTimeout = (() =>{
        document.querySelector('#tooltip').style.display = "flex";
    },500);
};

document.querySelector('button').onclick = validar;
