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
    connection.query(`SELECT car_brand FROM licence_plates`, function (error, results) {
      if (error) throw error;
      response.send(results);
  });
});


app.get('/q', function(req, res) {
  let searchParameter = Object.keys(req.query)[0]
  let searchValue = req.query[searchParameter]
  console.log({searchParameter : searchValue, dwa : searchParameter})
  let data = [];
  connection.query("select * from book_mast where " + searchParameter + " = " + searchValue,  function(err, result, fields){
    console.log()
    result.forEach(function(element){
      data.push(element.book_name)
      });
      res.send(data);
  })
});


app.listen(8080, () => console.log('server running on "http://localhost:8080"'));