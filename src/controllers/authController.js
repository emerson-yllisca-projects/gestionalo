const { Usuarios } = require('../database/db')
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../util/helper/jwt');
const logger = require('../logger');

const login = async(req, res) => {
    const { email, password } = req.body;
    try {

        usuarioLogueado = await Usuarios.findOne({
            where: {
                email
            }
        })

        if (!usuarioLogueado) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no valido'
            });
        }

        // veerificar contraseña
        const validarPassword = bcrypt.compareSync(password, usuarioLogueado.password)

        if (!validarPassword) {
            return res.status(404).json({
                ok: false,
                msg: 'Contraseña no valida'
            });
        }

        //Generar Token
        const token = await generarJWT(usuarioLogueado.id);

        res.json({
            ok: true,
            token
        })

    } catch (error) {
        logger.error(`Login Error: ${error}`)
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado login'
        })
    }
}

module.exports = {
    login
}