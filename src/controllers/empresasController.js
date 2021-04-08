const { response } = require('express')
const { Empresas } = require('../database/db')
crearEmpresa = async(req, res = response) => {

    const data = _.pick(req.body, [
        'nombre', 'ruc', 'direccion'
    ]);

    const empresaExiste = await Empresas.findAll({
        where: {
            ruc
        }
    })

    if (empresaExiste) {
        return res.status(400).json({
            ok: false,
            msg: 'El ruc ya esta registrado'
        })
    }


    return res.status(200).json({
        ok: true,
        msg: 'creada la Empresa'
    })

}


listarEmpresas = async(req, res) => {

}

module.exports = {
    crearEmpresa,
    listarEmpresas
}