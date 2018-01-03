const express = require('express')
const router = express.Router();

//render react app via pug

router.get('/', function(req,res, next){
    res.render('index', {title: 'Start Here'});
});

module.exports = router;