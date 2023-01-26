const express = require('express');
const https = require('https'); // Metodo nativo di node per fare get request


const app = express(); // app è una convenzione per i moduli express

app.get('/', (req, res) => {  //request response
    //res.send('Hello World!') // http://localhost:3000

    https.get('https://pyxis.iss-international.it/gilgamesh/pyxis_api.php/', function(response) {
    console.log(response);

    response.on('data',function(data){

       const apiResponse = JSON.parse(data);
       
       console.log (apiResponse);

       const lrsEndpoint = apiResponse.lrs_endpoint;

       console.log (lrsEndpoint);

       res.write('<h1>LRS URL: ' + lrsEndpoint + '</h1>');
       res.send();
       
    })
  })

})

app.listen(3000, function(){

    console.log ("Server Started at port 3000");

})
