const express = require('express');

const Film = require('./Film.js');

const router = express.Router();

// add endpoints here
router.get('/', function(req, res) {
    const producerFilter = new RegExp(req.query.producer, 'i');
    const releaseDateFilter = new RegExp(req.query.released, );

    let query = Film.find({})
    .sort('episode')
    // .populate('characters planets species')
    // .populate('characters', 'name gender height skin_color')
    // .populate('planets', 'name climate terrain gravity diameter')
    // .select('title producer release_date')

    if (req.query.producer) {
        query.where({ producer: producerFilter })
        .select('title release_date producer')
    } else if (req.query.released) {
        query.where({ release_date: releaseDateFilter })
        .select('title release_date')
    }
    // if (releaseDateFilter) {
    //     query.where({ released: /2005/i });
    // }
    query.then(films => {
        res.json(films);
    });
});

module.exports = router;
