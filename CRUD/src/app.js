const path = require('path');
const express = require('express');
const morgan = require ('morgan');
const exp = express();
const mongoose = require('mongoose');

//conexion a bade de datos
mongoose.connect('mongodb://localhost/crud-mongo')
.then(db => console.log('DB conectada'))
.catch(err=> console.log(err));
//rutas importadas
const indexRoutes = require('./routers/index');

//configuraciones
exp.set('port', process.env.PORT || 3000);//define el puerto y si no existe pon el 3000
exp.set('views', path.join(__dirname,'views'));
exp.set('view engine','ejs');

//app.static(app.get('port'));

//funciones para ejecutar antes
exp.use(morgan('dev'));
exp.use(express.urlencoded({extended: false}));

exp.use(express.static('public'));

//rutas
exp.use ('/', indexRoutes);
//servidor
exp.listen( app.get('port'), () => {
   console.log('Server on port ' + app.get('port'));

});
