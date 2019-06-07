/******************
 * Express NPM
 *****************/

const compression = require('compression')
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser');


/******************
 * Configurations
 *****************/
app.use(bodyParser.urlencoded({ extended: false }));
// Gives constant name to long directory home page.
const appPage = path.join(__dirname, '../../public/index.html')
// Compresses App
app.use(compression())
app.disable('etag')
// Allows the use of files.
app.use(express.static(__dirname + './../../'))



/******************
 * Database Connection
 *****************/

//get mongoose module
var mongoose = require('mongoose');

//debug -- (node:6368) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
//mongoose set
mongoose.set('useCreateIndex', true);

//mongoose connection's PATH
//mongoose.connect('mongodb://localhost:27017/realLifeIT', { userNewUrlParser: true });


//check for errors
let database = mongoose.connection;
database.on('error', function (err) {
  console.log(err);
});

//notice the sucessful connection
database.once('open', function () {
  console.log("Connected to database!")
});


//import
const router = require('../router/index.js');

app.use(router);



// Port Setting
app.listen(3000, () => console.log('Running on Port 3000... Do not forget to run "npm run dev" in another terminal!'))