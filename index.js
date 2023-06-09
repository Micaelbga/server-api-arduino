const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')

const routesCartao = require("./Controller/CartaoController");
const routesMovimentacao = require("./Controller/MovimentacaoController");
const routesUsuario = require("./Controller/UsuarioController");

const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json());
app.use(express.json());
app.use(
    express.urlencoded({
        extended:true
    })
);

app.use(routesCartao);
app.use(routesMovimentacao);
app.use(routesUsuario);

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});