/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: juan.zamora@nerdyne.com

    Ejemplo 6: Subir un archivo al servidor
*/

// librerias
var express = require('express');
var fileUpload = require('express-fileupload');

// variable que controla Express
var app = express();
app.use(fileUpload());

// GET
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

// POST
app.post('/file_upload',  function (req, res) {
    if(req,file){
        var file = req.file.archivo,
            filename = file.name;
        file.mv("./upload/"+filename);
                    
    console.log('Done!')
    }


  // TODO: investigue como hacer esto en
  // https://www.npmjs.com/package/express-fileupload
  // Ponga su codigo aqui



});


// Inicia el server...
var server = app.listen(8081, function () {
  console.log("Aplicacion activa en 8081");

});
