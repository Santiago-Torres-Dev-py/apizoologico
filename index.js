/*
'use strict';
const http = require('http');

const server = http.createServer(function(req, res){
    res.writeHead(200, { 'content-type': 'text/plain'});
    res.end('Hola Mundo');
});
server.listen(5000);
*/
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('¡Hola Santiago!')
})

app.listen(port, () => {
    console.log('La aplicación se esta ejecutando por el puerto', + `${port}`)
})