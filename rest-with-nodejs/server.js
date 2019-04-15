const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/contactdb');

const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
});

db.once('open', () => {
  console.log('Database Connection Established');
});


// Route
const contactRoute = require('./api/routes/contactRoute');
const userRoute = require('./api/routes/userRoute');


const app = express();

app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3300;




app.use('/api/contacts', contactRoute);
app.use('/api/users', userRoute);



app.get('/', (req, res) => {
  res.send('<div><h1>Hello World</h1><p>Welcome</p></div>');
});



app.listen(PORT, () => {
  console.log(`Server in running on http://${hostname}:${PORT}/`);

});

