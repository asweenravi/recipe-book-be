const express = require('express');
const router = express.Router();

router.get('/recipes',(req, res)=>{
    res.send('working');
})

module.exports = router;
