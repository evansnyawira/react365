
const express = require('express'),
    http = require('http'),
    path = require('path'),
    // index= require('./routes/index')
    fs = require('fs');


const app = express();

app.set('port', process.env.PORT || 3000);

// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

//routing views
// app.use('/', index);

const server = app.listen(app.get('port'), function(){
    console.log('server up on port' + server.address().port);
});