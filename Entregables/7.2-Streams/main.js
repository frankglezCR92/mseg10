/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: izamora@ucenfotec.ac.cr

    Ejemplo 8.2: Pipe Streams
*/

/// PIPING
var fs = require("fs");

// Create a readable stream
var readerStream1 = fs.createReadStream('a-wing.txt');

// Create a writable stream
var readerStream2 = fs.createReadStream('j-type-327.txt');
var endfile = fs.createWriteStream('fran.txt')
readerStream1.pipe(endfile);
readerStream2.pipe(endfile);

v

//// Se lee input.txt y se agrega la data a output.txt

//readerStream.pipe(writerStream);



// Salvar el pipe TODO.
// Ejericio: trate de salvar el texto en un nuevo archivo


// fin de codigo

console.log("Program Ended");
