const { Router } = require('express');
const router = Router();

//Controlador
const { listarUsuarios } = require('../controllers/usuariosController')

router.get('/', listarUsuarios);

module.exports = router;