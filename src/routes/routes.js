const { Router } = require('express');
const router = Router();

const usuarios = require('./usuarios.routes');

router.use('/usuarios', usuarios)

module.exports = router;