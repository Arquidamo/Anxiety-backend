const {Schema,model}=require('mongoose');




// Schema
const UsuarioEsquema=new Schema({
        nombreusuario:{
                type:String,
                required:true,
                unique:true,
                trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true

        },
        contraseña:{
               type:String,
               required:true
        },
        especialidad:{
            type:String,
            required:true,
            trim:true
        }
    },{
            timestamps:true
    });



module.exports=model('usuario',UsuarioEsquema);

