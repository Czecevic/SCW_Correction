const express = require('express');
const app = express();
const {toys, categories} = require('./data.js'); 
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));

// Index, route regroupant tous les jouets
app.get('/categories', (req, res) => {
    // res.send(toys);
    res.json(categories);
});

// Show, route ciblé sur un seul jouet

app.get('/categories/:id', (req, res) => {
    if (categories[req.params.id] === undefined) {
        res.sendStatus(404);
    } else {
        // res.send(toys[req.params.id]);
        res.json(categories[req.params.id]);
    }
});

// Create, route ciblé sur un nouveau jouet

app.post('/categories', (req, res) => {
    categories.push(req.body);
    res.json(categories);
});

// Update, route ciblé sur un jouet à modifier

app.put('/categories/:id', (req, res) => {
    if (categories[req.params.id] === undefined) {
        res.sendStatus(404);
    } else {
        Object.keys(categories[req.params.id]).forEach(key => {
            if (key === Object.keys(req.body)[0]) {
                categories[req.params.id][key] = req.body[key];
            }
        });
        // res.send(toys);
        res.json(categories);
    }
});

// Delete, route ciblé sur un jouet supprimé


app.delete('/categories/:id', (req, res) => {
    if (categories[req.params.id] === undefined) {
        res.sendStatus(404);
    } else {
        delete categories[req.params.id];
        // res.send(toys);
        res.json(categories);
    }
});

// Additional route 
app.get('/categories/:name/toys', (req, res) => {
    toys.forEach(toy => {
        // console.log(categories[toy.category_id])
        if (categories[toy.category_id] != undefined) { 
            if (categories[toy.category_id].name === req.params.name) {
                res.json(toy);
            }
        }
    })
    res.sendStatus(404);
})


app.listen(3000, () => {
    console.log('localhost:3000');
});