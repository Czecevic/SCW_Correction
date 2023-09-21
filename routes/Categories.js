const router = require("express").Router()
const { categories } = require("../data/data")

// Index, route regroupant tous les jouets
router.get('/', (req, res) => {
    // res.send(toys);
    res.json(categories);
});

// Show, route ciblé sur un seul jouet

router.get('/:id', (req, res) => {
    if (categories[req.params.id] === undefined) {
        res.sendStatus(404);
    } else {
        // res.send(toys[req.params.id]);
        res.json(categories[req.params.id]);
    }
});

// Create, route ciblé sur un nouveau jouet

router.post('/', (req, res) => {
    categories.push(req.body);
    res.json(categories);
});

// Update, route ciblé sur un jouet à modifier

router.put('/:id', (req, res) => {
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


router.delete('/:id', (req, res) => {
    if (categories[req.params.id] === undefined) {
        res.sendStatus(404);
    } else {
        delete categories[req.params.id];
        // res.send(toys);
        res.json(categories);
    }
});

// Additional route 
router.get('/:name/toys', (req, res) => {
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

module.exports = router