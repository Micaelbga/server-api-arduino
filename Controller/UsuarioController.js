const express = require("express");
const router = express.Router();
const UsuarioService = require("../Services/UsuarioService");

const routes = [
    router.get('/api/usuario/getusuarios',(req,res)=>{
        return UsuarioService.getUsuario(req,res);
    }),

    router.put('/api/usuario/updateusuario',(req,res)=>{
        return UsuarioService.updateUsuario(req,res);
    }),

    router.post('/api/usuario/postusuario',(req,res)=>{
        return UsuarioService.postUsuario(req,res);
    })
]

module.exports = routes;