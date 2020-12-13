const mongoose=require('mongoose');
require('./develop.servicio');


const Uri=process.env.MONGO_URI
?process.env.MONGO_URI
:'mongodb://localhost/Anxiety-Base';


mongoose.connect(Uri,{
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology:true,
    useCreateIndex: true
});

mongoose.connection.once('open',()=>{
  console.log(tisa.yellowBright('base de datos conectada'));
});

mongoose.connection.on('error', err => {
    console.log('error al conectar base de datos')
    console.log(err);
  });
  mongoose.connection.on('success', () => {
    logError(err);
   
  });