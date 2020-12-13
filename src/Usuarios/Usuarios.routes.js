const {Router}=require('express');


const router=Router();


const {
    crearUsuario,
    obtenerTodos,
    ObtenerUsuario
}=require('./Usuario.controller');

router.route('/')
         .get(obtenerTodos)
         .post(crearUsuario);
router.route('/:id')
         .get(ObtenerUsuario)         




module.exports=router;