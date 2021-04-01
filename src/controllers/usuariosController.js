 const { Usuarios } = require('../database/db')

 const listarUsuarios = async(req, res) => {

     try {

         let usuario = await Usuarios.findAll({});

         return res.status(200).json({
             ok: true,
             usuario
         })



     } catch (e) {
         return res.status(500).json({
             ok: false,
             Error: e.message
         })
     }


 }

 module.exports = {
     listarUsuarios
 }