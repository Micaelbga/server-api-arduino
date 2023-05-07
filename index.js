const express = require("express");
const routesCartao = require("./Controller/CartaoController");
const routesMovimentacao = require("./Controller/MovimentacaoController");
const routesUsuario = require("./Controller/UsuarioController");
const app = express();
const port = 3000;

app.use(express.json());
//app.use(bodyParser.json());
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