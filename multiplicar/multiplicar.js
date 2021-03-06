// Require
const fs = require('fs');
const colors = require('colors');

let listarTabla = ( base,  limite = 10 ) => {
        if (!Number(base)){
            console.log(`El valor introducido ${base} no es numero`);
            return;
        }

        if (!Number(limite)){
            console.log(`El limite introducido ${limite} no es numero`);
            return;
        }

        console.log('************************'.green);
        console.log(`Tabla de ${base} `.green);
        console.log('************************'.green);

        let data = '';
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${ base * i}`);   
        }

}

let crearArchivo = ( base, limite = 10) => {
    return new Promise( (resolve, reject) => {
        
        if (!Number(base)){
            reject (`El valor introducido ${base} no es numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;   
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
        });
    });
};


module.exports = {
    crearArchivo,
    listarTabla
}
