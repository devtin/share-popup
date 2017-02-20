#!/usr/bin/env node

const
    express = require('express'),
    path    = require('path'),
    app     = express();

app.listen(80);
app.use(express.static(__dirname));

app.get('/share-popup.js',function(req,res) {
    res.sendFile(path.resolve(__dirname,'../share-popup.js'));
});