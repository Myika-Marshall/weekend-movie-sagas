const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// GET route for movies with details(id)
router.get('/details/:id', (req, res) => {
    console.log('in DETAILS ROUTER(ID', req.params);
    const selectedMovieId = req.params.id;
    const sqlText = `
    SELECT * FROM "movies"
        JOIN "movies_genres"
            ON "movies"."id"="movies_genres"."movie_id"
        JOIN "genres"
            ON "movies_genres"."genre_id"="genres"."id"
                WHERE "movie_id"=$1;`;
    const sqlValues = [selectedMovieId]
    pool.query(sqlText, sqlValues)
        .then(result => {
            console.log('in GET /api/details route, result:', result.rows);
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get movie details', err);
            res.sendStatus(500)
        })

});

module.exports = router;