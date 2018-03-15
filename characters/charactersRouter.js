const express = require('express');

const Character = require('./Character.js');

const router = express.Router();

// add endpoints here
// router.get('/', (req, res) => {
//     Character.find({})
//     .then(char => {
//         res.json(char);
//     })
//     .catch(err => {
//         res.status(500).json({ error: 'error retrieving characters'})
//     })
// })

router.get('/:id', function(req, res) {
    const { id } = req.params;

    Character.findById(id )
    .populate('homeworld')
    .populate('movies', 'title')
    .then(char => {
        res.json(char)
    })
    .catch(err => {
        res.status(500).json({ error: 'There was an error retrieving character'});
    })
});
module.exports = router;
