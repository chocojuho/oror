const express = require('express');
const request = require('request');
const exp = require('constants');
const cors = require('cors');
const port = process.env.port || 8080;
const app = express();
const Joi = require('joi');
const { func } = require('joi');
const corsOptions = { origin: 'http://localhost:8080', credentials: true };
app.use(cors(corsOptions));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log('포트가 열렸습니다 ' + port);
});

app.get('/', (req, res) => {
    res.render("index.ejs");
});
app.get('/graph', (req, res) => {
    res.render("graph.ejs");
});
app.get('/introduce', (req, res) => {
    res.render("introduce.ejs");
});
app.get('/ps', (req, res) => {
    res.render("ps.ejs");
});
app.get('/make', (req, res) => {
    res.render("make.ejs");
});
app.post('/add', (req, res) => {});
app.get('/password', (req, res) => {
    res.render("password.ejs");
});
app.post('/checkpassword', (req, res) => {});