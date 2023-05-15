const express = require("express");
const router = express.Router();
const UsuarioService = require("../Services/UsuarioService");

const routes = [
    router.post('/api/usuario/getusuario',(req,res)=>{
        return UsuarioService.getUsuarioIdByEmail(req,res);
    }),

    router.put('/api/usuario/updateusuario',(req,res)=>{
        return UsuarioService.updateUsuario(req,res);
    }),

    router.post('/api/usuario/postusuario',(req,res)=>{
        return UsuarioService.postUsuario(req,res);
    })
]

module.exports = routes;