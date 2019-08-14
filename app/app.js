const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);
// app.get('/',(req,res)=>{
//     res.send('got response');
// })
app.listen(3000, ()=>{
    console.log("app is listening to 5432")
});