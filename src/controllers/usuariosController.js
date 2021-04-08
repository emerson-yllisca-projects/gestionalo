 const { Usuarios } = require('../database/db')
 const response = require('express')
 const bcrypt = require('bcryptjs');
 const _ = require('lodash');
 const { generarJWT } = require('../util/helper/jwt')
 const logger = require('../logger')

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

 const crearUsuarios = async(req, res = response) => {

     try {
         //recuperar valores
         const data = _.pick(req.body, [
             'nombre', 'apellido', 'email', 'password', 'fechanacimiento'
         ]);

         const emailExiste = await Usuarios.findOne({
             where: {
                 email: data.email
             }
         });

         if (emailExiste) {
             console.log("ya esta registrado el correo")
             return res.status(400).json({
                 ok: false,
                 msg: 'El correo ya esta registrado..',
                 emailExiste
             })
         }

         //Encriptar password
         const salt = bcrypt.genSaltSync();
         data.password = bcrypt.hashSync(data.password, salt);

         const nuevoUsuario = await Usuarios.create(data);
         const token = await generarJWT(nuevoUsuario.id);

         res.json({
             ok: true,
             nuevoUsuario,
             token
         });

     } catch (e) {
         res.status(500).json({
             ok: false,
             Error: e.message
         })
     }
 }

 const actualizarUsuarios = async(req, res = response) => {

 }

 module.exports = {
     listarUsuarios,
     crearUsuarios,
     actualizarUsuarios
 }