const express = require("express");
const path = require('path');
const trans = require("./server/routes");

const app = express();

trans(app);

// app.use('/api/form', require('./server/routes'))
app.use(express.static( __dirname + '/client/dist/client' ));
app.all("*", (req, res, next)=> {
    res.sendFile(path.resolve("./client/dist/client/index.html"))
});

const server = app.listen(8000, function() {
    console.log('\x1b[34m', "listening on port " + server.address().port, "\x1b[0m")
})