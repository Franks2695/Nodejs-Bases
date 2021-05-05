const fs = require('fs');
var colors = require('colors')

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor de la base introducido '${base}' no es un numero`)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`La tabla-${base}.txt ha sido creado`)
        });
    });
}

let imprimirTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor de la base introducido '${base}' no es un numero`)
            return;
        }

        console.log('--------------------------------------'.rainbow);
        console.log(` TABLA DE MULTIPLICAR - ${base}`.rainbow);
        console.log('--------------------------------------'.rainbow);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }
    });
}

module.exports = {
    crearArchivo,
    imprimirTabla
}