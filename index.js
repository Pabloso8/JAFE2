// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static('Front/argon-design-system-react-master/build'))
//   // .set('views', path.join(__dirname, 'views'))
//   // .set('view engine', 'ejs')
//   // .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

//   // express().use(express.static('Front/argon-system-react-master/build'));

const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 5000
var expressStaticGzip = require("express-static-gzip");

app.use(express.json())

app.use(express.static("./Front/material-kit-react-main/build"));
const gzipOptions = {
  enableBrotli: true,
  customCompressions: [{
  encodingName: 'deflate',
  fileExtension: 'zz'
 }],
 orderPreference: ['br']
}

// app.use( "/",expressStaticGzip("./Front/argon-design-system-react-master/build", gzipOptions));



app.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "http://192.168.0.106:8080"); 
  // res.header("Access-Control-Allow-Origin", "http://www.datazo.info");
  // res.header("Access-Control-Allow-Origin", "http://datazo.info");
  // res.header("Access-Control-Allow-Origin", "https://datazo.herokuapp.com");
  res.header("Access-Control-Allow-Origin", "http://localhost:5000"); // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.header("Access-Control-Allow-Origin", "https://datazo-workernode-3.herokuapp.com");
  // res.header("Access-Control-Allow-Origin", "http://192.168.0.106:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


app.get('/hola', (req, res) => {
  res.send("Hola")
});

var server = app.listen(PORT, console.log("Server running at " + PORT));