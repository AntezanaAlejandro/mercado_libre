//Constantes
const express = require('express');
const path = require('path');
const app = express();
//middlewares
app.use(express.static('public'));
//rutas: get, post, put, delete
app.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'./views/index.html'));
})
//Ruteo LOCAL
app.listen(3001, ()=> console.log("Servidor escuchando en puerto 3001")); 

