const mongoos = require('mongoose');
const validator = require('validator');


const Schema = mongoos.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3
  },
  phone: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  email: {
    type: String,
    trim: true,
    validate: {
      validator: (v) => {
        return validator.isEmail(v);
      },
      message: `{VALUE} is not an email`
    }
  }
})


// Model 
const Contact = mongoos.model('Contact', ContactSchema);

module.exports = Contact;