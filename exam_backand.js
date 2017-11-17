'use stirct'


const express = require('express');
const app = express()
const mysql = require('mysql');

app.use('/', express.static('./assets'));
app.use(express.json())



const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '2312paska',
  database : 'licence_plates'
});
 
connection.connect();


app.get('/', function(request, response) {
  response.sendFile(__dirname + '/licence_plates.html');
});


app.get('/search', function(request, response) {
    connection.query(`SELECT * FROM licence_plates`, function (error, results) {
      if (error) {
        console.log(error.toString())
      };
      console.log(results)
      response.send(results);
  });
});

app.get('/search/:brand', function(request, response) {
    connection.query(`SELECT * FROM licence_plates where car_brand LIKE "`, function (error, results) {
      if (error) {
          console.log(error.toString())
      };
      response.send(results);
  });
});


app.listen(8080, () => console.log('server running on "http://localhost:8080"'));