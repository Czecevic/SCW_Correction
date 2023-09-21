const router = require("express").Router()
const bodyParser = require("body-parser")
const { toys } = require("../data/data")



// Index, route regroupant tous les jouets
router.get("/", (req, res) => {
  // res.send(toys);
  res.json(toys);
});

// Show, route ciblé sur un seul jouet

router.get("/:id", (req, res) => {
  if (toys[req.params.id] === undefined) {
    res.sendStatus(404);
  } else {
    // res.send(toys[req.params.id]);
    res.json(toys[req.params.id]);
  }
});

// Create, route ciblé sur un nouveau jouet

router.post("/", (req, res) => {
  toys.push(req.body);
  // res.send(toys);
  res.json(toys);
});

// Update, route ciblé sur un jouet à modifier

router.put("/:id", (req, res) => {
  if (toys[req.params.id] === undefined) {
    res.sendStatus(404);
  } else {
    Object.keys(toys[req.params.id]).forEach((key) => {
      if (key === Object.keys(req.body)[0]) {
        toys[req.params.id][key] = req.body[key];
      }
    });
    // res.send(toys);
    res.json(toys[req.params.id]);
  }
});

// Delete, route ciblé sur un jouet supprimé

router.delete("/:id", (req, res) => {
  if (toys[req.params.id] === undefined) {
    res.sendStatus(404);
  } else {
    delete toys[req.params.id];
    // res.send(toys);
    res.json(toys);
  }
});

module.exports = router