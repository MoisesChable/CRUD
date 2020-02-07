const path = require('path');
const express = require('express');
const morgan = require ('morgan');
const app = express();
const mongoose = require('mongoose');

//conexion a bade de datos
mongoose.connect('mongodb://localhost/crud-mongo')
.then(db => console.log('DB conectada'))
.catch(err=> console.log(err));
//rutas importadas
const indexRoutes = require('./routers/index');

//configuraciones
app.set('port', process.env.PORT || 3000);//define el puerto y si no existe pon el 3000
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//app.static(app.get('port'));

//funciones para ejecutar antes
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));

//rutas
app.use ('/', indexRoutes);
//servidor
app.listen( app.get('port'), () => {
   console.log('Server on port ' + app.get('port'));

});
