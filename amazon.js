const http = require('http');

const express = require('express');

const fs = require('fs');

const app = express();

app.use(express.urlencoded({ extended: true }));
const adminroutes=require('./routes/admin')
const shoproutes=require('./routes/shop')

const server = http.createServer(app);

app.use(adminroutes);

app.use(shoproutes);

 

// Start the server

server.listen(3000, () => {

    console.log('Server running on http://localhost:3000');

});

