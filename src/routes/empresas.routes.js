const { Router } = require('express');
const router = Router();

//Utils
const { check } = require('express-validator')
const { validarCampos } = require('../util/middlewares/validar-campos')
const { validarJWT } = require('../util/middlewares/validar-jwt');

//Controlador
const { crearEmpresa, listarEmpresas } = require('../controllers/empresasController');

router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('ruc', 'El ruc es obligatorio').not().isEmpty(),
    check('direccion', 'La direccion es obligatoria').not().isEmpty(),
    validarCampos
], crearEmpresa);
router.get('/', listarEmpresas)


module.exports = router;