const bcrypt = require('bcrypt');

const User = require('../models/UserModel');

const registerController = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      res.json({
        error: err
      });
    }

    let user = new User({
      email: req.body.email,
      password: hash
    });

    user.save()
      .then(result => {
        res.status(201).json({
          message: 'User Created Successfully',
          user: result
        });
      })
      .catch(error => {
        res.json({
          error
        });
      });
  });
};


const loginController = (req, res, next) => {

  let email = req.body.email;
  let password = req.body.password;

  User.findOne({
      email
    })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            res.json({
              message: 'Error Occured'
            });
          }

          if (result) {
            res.json({
              message: 'Login Successfully'
            });
          } else {
            res.json({
              message: 'Login Failed, password dosen\'t match'
            });
          }
        });
      } else {
        res.json({
          message: 'User not found'
        });
      }
    })
    .catch(error => {
      res.json({
        error
      });
    });
};

const getAllUser = (req, res, next) => {
  User.find()
    .then(users => {
      res.json({
        users
      });
    })
    .catch(error => {
      res.json({
        error
      });
    });
};

module.exports = {
  registerController,
  loginController,
  getAllUser
};