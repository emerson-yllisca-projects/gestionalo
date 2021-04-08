const { Router } = require('express');
const router = Router();

const usuarios = require('./usuarios.routes');
const auth = require('./auth.routes');
const empresas = require('./empresas.routes');


router.use('/auth', auth);
router.use('/usuarios', usuarios);
router.use('/empresas', empresas)

module.exports = router;