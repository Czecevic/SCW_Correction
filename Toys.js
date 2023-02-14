const express = require('express');
const app = express();
const {toys, categories} = require('./data.js'); 
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));

// Index, route regroupant tous les jouets
app.get('/toys', (req, res) => {
    // res.send(toys);
    res.json(toys);
});

// Show, route ciblé sur un seul jouet

app.get('/toys/:id', (req, res) => {
    if (toys[req.params.id] === undefined) {
        res.sendStatus(404);
    } else {
        // res.send(toys[req.params.id]);
        res.json(toys[req.params.id]);
    }
});

// Create, route ciblé sur un nouveau jouet

app.post('/toys', (req, res) => {
    toys.push(req.body);
    // res.send(toys);
    res.json(toys);
});

// Update, route ciblé sur un jouet à modifier

app.put('/toys/:id', (req, res) => {
    if (toys[req.params.id] === undefined) {
        res.sendStatus(404);
    } else {
        Object.keys(toys[req.params.id]).forEach(key => {
            if (key === Object.keys(req.body)[0]) {
                toys[req.params.id][key] = req.body[key];
            }
        });
        // res.send(toys);
        res.json(toys);
    }
});

// Delete, route ciblé sur un jouet supprimé


app.delete('/toys/:id', (req, res) => {
    if (toys[req.params.id] === undefined) {
        res.sendStatus(404);
    } else {
        delete toys[req.params.id];
        // res.send(toys);
        res.json(toys);
    }
});

app.listen(3000, () => {
    console.log('localhost:3000');
});