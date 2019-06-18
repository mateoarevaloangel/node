const express =require('express');
const app = express();
var bodyparse=require('body-parser');
const mongoose = require('mongoose');
var cors= require('cors');

mongoose.connect('mongodb+srv://MongoDBuser:Carajo14@cluster0-xsr5f.mongodb.net/test?retryWrites=true')
.then(db=>console.log('db connected'))
.catch(err=>console.log(err));

app.set('port', process.env.PORT ||3200);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));


app.use(require('../src/routes/index.js'));

app.listen(app.get('port'),()=>{
console.log('server corren en el puerto'+app.get('port'));
//console.log(`server corren en el puerto${app.get('port')}`);
});


    