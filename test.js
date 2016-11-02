var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var slackEvents = require('./index')(false, console.log);

app.use('/slack_event', slackEvents);

app.listen(3000);
