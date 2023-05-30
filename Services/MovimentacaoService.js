const db = require("../configDb");

class MovimentacaoService{

        static getMovimentacao(req,res){
            
            db.query(
                "SELECT cartao.id, movimentacao.data_movimentacao, usuario.nome FROM movimentacao INNER JOIN cartao ON movimentacao.cartao_id = cartao.id LEFT JOIN usuario ON cartao.usuario_id = usuario.id",
                (err, result)=>{
                    if(err){
                        res.send(err).status(500)
                    }else{
                        res.json(result).status(200);
                    }
                }
            );
            
        }

        static getMovimentacaoByCartaoId(req,res){
            let response;
            
            db.query("SELECT * from movimentacao WHERE cartao_id = (?)",(err,result)=>{
                if(err){
                    throw err
                }else{
                    response = res.status(200).json(result);
                }
            });
            db.end();
            return result;
        }

        static postMovimentacao(req,res){
            let nfcCod = Object.keys(req.body)[0];
            let date = new Date();
            db.query("INSERT INTO movimentacao (data_movimentacao, cartao_id) values (?,?)",[date,nfcCod],(err,result)=>{
                if(err){
                    throw err
                }else{
                    result = res.status(200).json(result);
                }
            });
            db.end();
            return result;
        }

        static deleteMovimentacao(req,res){
            let cartaoId = Object.keys(req.body)[0]
            db.query("DELETE FROM movimentacao where cartao_id = (?)",[cartaoId],(err,result)=>{
                if(err){
                    res.status(500).json(err);
                }else{
                    res.status(200).json(result);
                }
            });
        }
}

module.exports = MovimentacaoService;