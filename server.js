const express = require('express');
const app = express();

const ip = process.env.IP; //comment out for production
const port = process.env.PORT; //Change to 3000 for production, process.env.port for testing

//=========****REMOVE IP FOR PRODUCTION****============
app.listen(port, ip, function() {
  console.log('listening on ' + port);
})

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})