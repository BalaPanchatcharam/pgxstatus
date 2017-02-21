var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var port = 5000;
var app = express();

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var team = require('./routes/team');

// Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use('/', index);
app.use('/team', team);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'tp')));

app.listen(port, function() {
    console.log("Started Server at localhost:" + port);
});