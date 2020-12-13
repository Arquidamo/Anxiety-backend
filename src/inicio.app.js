require('dotenv').config();
const app=require('./servidor/servidor.app');

require('./servidor/base.coneccion.app');
require('./servidor/develop.servicio');


async function main(){
    //listener
await app.listen(app.get('port'));
   console.log(tisa.blue(`el servidor esta escuchando en el puerto: ${app.get('port')}`));
}

main();