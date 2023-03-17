const express = require('express')
const router = express.Router()
var article = require('../article-db')

router.get('/', function(req, res, next) {
    var data = { 
        title: 'Ramja',
        name: 'Ram',
     }
    res.render('index', data)//รู้ได้ไงไป index.ejs?

})

module.exports = router