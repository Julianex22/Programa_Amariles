const path= require('path');
const morgan= require('morgan');
const mongoose=require('mongoose');
const MONGO_URL= 'mongodb://localhost:27017/crud-mongo';
const express = require('express');
const moment= require('moment');


moment().format();
moment.locale('es')

//



const app = express();
app.locals.fecha = moment();
app.locals.moment= require('moment')





//conecting to DB
mongoose.connect(MONGO_URL,{ useNewUrlParser: true , useUnifiedTopology:true, useCreateIndex:true })
.then (db=>console.log('Db connected'))
.catch(err => console.log(err));
//Importing routes
const indexRoutes= require('./routes/index');


// setting
app.set('port', process.env.PORT ||3001);
app.set('views',path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');



//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));// este middleware permite que express codifique la URL
                                              // para que la pueda analizar por lo tanto puede leer el body de la peticion

app.use('/static', express.static(__dirname + '/public'));





//routes
app.use('/',indexRoutes);


//starting the server

app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);

});

let ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', {people: people});


    
    
