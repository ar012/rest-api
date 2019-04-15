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

// Schema
const Schema = mongoose.Schema;
const demoSchema = new Schema({
  name: {
    type: String,
    require: true,
    minlength: 3
  },
  phone: {
    type: String,
    require: true
  }
});

// model
const Demo = mongoose.model('Demo', demoSchema);


// Route
const contactRoute = require('./api/routes/contact');


const app = express();

app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3300;


// app.use((req, res, next) => {
//   console.log('This is a Middleware Function');
//   next();
// });


app.use('/api/contacts', contactRoute);


app.get('/', (req, res) => {
  res.send('<div><h1>Hello World</h1><p>Welcome</p></div>');
});


// app.get('/posts', (req, res) => {
//   res.send('<h1>This is posts pages</h1>');
// });


// app.get('/api/contacts', (req, res) => {
//   // res.send('All Contacts');
//   res.json(contacts);
// });

// app.post('/api/contacts', (req, res) => {
//   res.json({
//     message: 'This is Post Method'
//   });
// });


app.get('/demo', (req, res) => {
  const demo = new Demo({
    name: 'Nishi',
    phone: '012334555'
  })

  demo.save()
      .then(data => {
        res.json({data})
      })
      .catch(err => console.log(err))
})

app.get('/get', (req, res) => {
  Demo.find()
      .then(data => {
        res.json(data)
      })
      .catch(err => console.log(err))
})


app.listen(PORT, () => {
  console.log(`Server in running on http://${hostname}:${PORT}/`);

});


const contacts = [{
    id: 1001,
    name: 'AR',
    email: 'ar@selftics.com'
  },
  {
    id: 1003,
    name: 'Manik',
    email: 'manik@selftics.com'
  },
  {
    id: 1005,
    name: 'Rini',
    email: 'rini@selftics.com'
  },
  {
    id: 1010,
    name: 'Rishad',
    email: 'rishad@selftics.com'
  },
];