const express = require("express");
const router = express.Router();
const CartaoService = require("../Services/CartaoService");

const routes = [
    router.get("/api/cartao/getcartoes", (req,res)=>{
        return CartaoService.getCartoes(req,res);
    }),

    router.post("/api/cartao/getcartao",(req,res)=>{
        return CartaoService.getCartaoByCod(req,res);
    }),

    router.post("/api/cartao/postcartao",(req,res)=>{
        return CartaoService.postCartao(req,res);
    }),

    router.put("/api/cartao/updatecartao",(req,res)=>{
        return CartaoService.updateCartao(req,res);
    }),
]

module.exports = routes;