var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const env = require('dotenv');
const mongoose = require('mongoose');

env.config();


var app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'csv')));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//Routes
app.use('/api',require('./routes/users'));




mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  mongoose.connection.on('connected', () => {
    console.log('Database Connected');
  });
  
  mongoose.connection.on('error', (err) => {
    console.log('Connection Error', err);
  });
  
  app.get('/', (req, res) => {
    res.send('Server started...');
  });
  



app.listen(process.env.PORT,()=>console.log(`Sever running on PORT ${process.env.PORT}`))


