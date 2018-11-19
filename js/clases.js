class Expresiones{
    constructor(nombre, clase, zip, dir){
    this.nombre = nombre;
    this.clase  = clase;
    this.zip    = zip;
    this.dir    = dir;
    }
    validarnombre(nombre, clase){
        let regex = new RegExp('^[A-Za-z]+$');
    
        if(regex.test(nombre.value) && nombre.value.length >= 3){
            clase.classList.add('hidden');
            nombre.style.border = "1px solid green";
        }else{
            clase.classList.remove('hidden');
            nombre.style.border = "1px solid red";
        }
    }
    validarZip(zip, clase){
        let regex = new RegExp('\\b\\d{5}\\b');
        
        if (regex.test(zip.value)){
            clase.classList.add('hidden');
            zip.style.border = "1px solid green";
        }else {
            clase.classList.remove('hidden');
            zip.style.border = "1px solid red";
        }
    }
    validarDir(dir, clase){
        let regex = new RegExp('^[A-Za-z]+\\s[A-Z-a-z]+\\W+\\s[0-9]');
        
        if(dir.value != '' && regex.test(dir.value)){
            clase.classList.add('hidden');
            dir.style.border = "1px solid green";
        }else{
            clase.classList.remove('hidden');
            dir.style.border = "1px solid red";
        }
    }
}

export{ Expresiones };