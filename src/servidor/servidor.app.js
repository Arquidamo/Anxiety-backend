const express=require('express');
const app = express();
const cors=require('cors');


//settings

app.set('port',process.env.PORT||1100);

//middleware
app.use(cors());
app.use(express.json());



//routes
app.use('/api/usuarios',require('../Usuarios/Usuarios.routes'));
//exports
module.exports = app;


