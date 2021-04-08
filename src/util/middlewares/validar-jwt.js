const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {

    //leer token
    const token = req.header(process.env.NAME_HEADER_TOKEN);

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No existe un token en la petición'
        })
    }

    try {

        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token incorrecto'
        })
    }
}


module.exports = {
    validarJWT
}