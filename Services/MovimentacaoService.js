const db = require("../configDb");

class MovimentacaoService{

        static getMovimentacao(req,res){
            let response;
            db.query("SELECT * FROM movimentacao",(err, result)=>{
                response = res.status(200).json(result);
            });
            db.end();
            return response;
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
}

module.exports = MovimentacaoService;