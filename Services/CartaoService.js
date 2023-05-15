const db = require("../configDb");

class CartaoService{

    static getCartoes(req,res){
        db.query(
            "SELECT cartao.id, usuario.nome FROM cartao LEFT JOIN usuario ON cartao.usuario_id = usuario.id",
            (err,result)=>{
                res.send(result)
            }
        );

    }

    static getCartaoByCod(req,res){
        let nfcCod = Object.keys(req.body)[0];
        let response;
        
        db.query("SELECT * FROM cartao WHERE id = (?)",nfcCod,(err,result)=>{
            if(err){
                throw err
            }else{
                if(result.length == 0){
                    response = res.status(404).json(result);   
                }else{
                    response = res.status(200).json(result);
                }
            }
        });
        return response;
    }

    static postCartao(req,res){
        let response;
        let nfcCod = Object.keys(req.body)[0];
        let date = new Date();

        db.query("INSERT INTO cartao (id,data_cadastro) VALUES (?,?)",[nfcCod,date],(err,result)=>{
            if(err){
                throw err
            }else{
                response = res.status(200).json(result);
            }
        });
        return response;
    }

    static updateCartao(req,res){
        db.query("UPDATE cartao SET usuario_id = ? WHERE id = (?)",
        [req.body.userId,req.body.id],
        (err,result)=>{
            if(err){
                throw err
                res.send(err).status(500);
            }else{
                console.log(result);
                res.send(result).status(200);
            }
        })
    }
}

module.exports = CartaoService;