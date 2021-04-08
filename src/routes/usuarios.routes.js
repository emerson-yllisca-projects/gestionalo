const { Router } = require('express');
const router = Router();
//Utils
const { check } = require('express-validator')
const { validarCampos } = require('../util/middlewares/validar-campos')
const { validarJWT } = require('../util/middlewares/validar-jwt');

//Controlador
const { listarUsuarios, crearUsuarios, actualizarUsuarios } = require('../controllers/usuariosController')

router.get('/', [validarJWT], listarUsuarios);
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('fehanacimiento', 'La fecha de nacimiento es obligatoria').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], crearUsuarios)
router.put('/', actualizarUsuarios)

module.exports = router;