var express = require('express');
var router = express.Router();
const dotenv = require('dotenv').config()
const bcrypt = require('bcrypt')

/* GET home page. */
router.post('/auth', function(req, res, next) {
    const setCookies = (req, res) => {
    res.cookie("connected", bcrypt.hash(req.body.password, 4){
      httpOnly: true,
      secure: true,
      signed: true
    })
    res.json({
      message: "Enjoy!"
    })
  }
  if(req.body.password == process.env.PASSWORD){
    setCookies(req, res)
  } else {
    next(new Error("Invalid Password"))
  }
});

module.exports = router;
