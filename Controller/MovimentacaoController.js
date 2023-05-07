const express = require("express");
const router = express.Router();
const MovimentacaoService = require("../Services/MovimentacaoService");

const routes = [

    router.get("/api/movimentacao/getmovimentacoes",(req,res)=>{
        return MovimentacaoService.getMovimentacao(req,res);
    }),

    router.get("/api/movimentacao/getmovimentacao",(req,res)=>{
        return MovimentacaoService.getMovimentacaoByCartaoId(req,res);
    }),

    router.post("/api/movimentacao/postmovimentacao",(req,res)=>{
        return MovimentacaoService.postMovimentacao(req,res);
    })
]

module.exports = routes;