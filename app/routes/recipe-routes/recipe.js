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

router.post('/recipes', (req, res) => {
    var query = `INSERT INTO recipes (data) values ('${JSON.stringify(req.body)}');`
    db.query(query).then((results) => {
        res.status(200).send({ message: 'sucess', data: results });
    }).catch(err => {
        res.status(500).send({ message: 'database error', error: err });
    })
 });

router.put('/recipes', (req, res) => {
    console.log(JSON.stringify(req.body));
    var query = `UPDATE recipes SET data = '${JSON.stringify(req.body)}' WHERE data @> '{"id":  ${req.body.id}} ';`
    db.query(query,req.body.id).then((results) => {
        res.status(200).send({ message: 'sucess', data: results });
    }).catch(err => {
        res.status(500).send({ message: 'database error', error: err });
    })
});

router.delete('/recipes', (req, res) => {
    var query = `DELETE FROM recipes WHERE data @> '{"id":  ${req.body.id}}';`
    db.query(query).then((results) => {
        res.status(200).send({ message: 'sucess', data: results });
    }).catch(err => {
        res.status(500).send({ message: 'database error', error: err });
    })
 });

module.exports = router;
