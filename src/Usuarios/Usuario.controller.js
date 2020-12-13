const UsuariosCtrol={};

const usuarioMo=require('./Usuarios.models');
            
                                                //crear usuario
UsuariosCtrol.crearUsuario=async(req,res)=>{
    try{
        const {
            nombreusuario,
            email,
            contraseña,
            especialidad
        }=req.body;
        const nuevoUsuario=new usuarioMo({
            nombreusuario,
            email,
            contraseña,
            especialidad
        });
        await nuevoUsuario.save();
        res.status(201).json(`usuario creado:`);
        res.json(nuevoUsuario);
    }
    catch(e){
        console.log(e);
        res.json(e);

    };
}
                                              //obtener unico usuario
UsuariosCtrol.ObtenerUsuario=async(req,res)=>{
    const{id}=req.params.id;
    const mostrar=await usuarioMo.findOne(id);
    res.json(mostrar);
}
                    //obtener todos
UsuariosCtrol.obtenerTodos=async(req,res)=>{
        try{
                  const usuario=await usuarioMo.find();
                  res.json(usuario);
           }
           catch(err){
            res.json({
                error:err
            });
         }
     };
            

    





module.exports=UsuariosCtrol;