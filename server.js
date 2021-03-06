const jsonServer = require('json-server');
const app = jsonServer.create();
const path = require('path');
const express = require('express');
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');
const port = process.env.PORT || 5000;

app.use('/db', middlewares, router);


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, 'snack-or-booze/build')));
}


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'snack-or-booze/build/index.html'));
});

app.listen(port);