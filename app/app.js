const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
require('./routes')(app)

app.listen(3000, ()=>{
    console.log("app is listening to 5432")
});