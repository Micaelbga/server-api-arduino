const db = require("../configDb");

class CartaoService{

    static getCartoes(req,res){
        let response;
        db.query("SELECT * FROM cartao",(err,result)=>{
            response = res.status(200).json(result);
        });
        return response;

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
}

module.exports = CartaoService;