const { Router } = require('express');
const router = Router();

//Controlador 
const { login } = require('../controllers/authController');

//Utils
const { check } = require('express-validator')
const { validarCampos } = require('../util/middlewares/validar-campos')


router.post('/login', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login)

module.exports = router;