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
    let searchParameter = Object.keys(request.query)[0];
    let searchValue = request.query[searchParameter];
    let data = [];
    connection.query('SELECT * FROM licence_plates ' + searchParameter + ' = ' + searchValue + ' ORDER BY plate ASC', function (error, results) {
      if (error) {
        console.log({ "result": "error", "message": "invalid input" })
      };
      results.forEach(function (e) {
        data.push(e);
      });
      response.send(data);
  });
});


app.get('/search:brand', function(request, response) {
    connection.query(`SELECT * FROM licence_plates, WHERE car_brand LIKE "`, function (error, results) {
      if (error) {
          console.log({ "result": "error", "message": "invalid input" })
      };
      response.send(results);
  });
});



app.listen(8080, () => console.log('server running on "http://localhost:8080"'));