const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 1337;
const {notificationRules} = require('./rules/main.rfl');

var app = express();
app.use(bodyParser.json());

app.post('/notificationRules', (req, res) => {
    var result = notificationRules(req.body);
    res.send(result);
});

app.listen(port, () => {
    console.log('Started on port', port);
});

module.exports = {
    app
};