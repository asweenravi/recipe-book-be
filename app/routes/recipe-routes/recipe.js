const express = require('express');
const router = express.Router();
const pgp = require('pg-promise')();
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'Pass@123'
};
const db = pgp(cn);

router.get('/recipes', (req, res) => {
    db.query('SELECT * FROM recipes').then((results) => {
        res.status(200).send({ message: 'sucess', data: results });
    }).catch(err => {
        res.status(500).send({ message: 'database error', error: err });
    })
});

module.exports = router;
