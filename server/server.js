const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(__dirname + '/../client/'));

const apiRouter = require('./routes/apiRouter');
app.use('/api', apiRouter);

app.get('/', function(req, res) {
    res.sendFile(path.resolve('/index.html'));
});

app.listen(process.env.PORT, function() {
    console.log('App running on port', process.env.PORT);
});