const db = require("../configDb");

class UsuarioService{

    static getUsuario(req,res){
        let response;

        db.query("SELECT * FROM usuario",(err,result)=>{
            response = res.status(200).json(result);
        });
        db.end();

        return response;
    }

    static postUsuario(req,res){
        let response;

        db.query("INSERT INTO usuario (nome,cartao_id,matricula) values (?,?,?)"[req.body.nome,req.body.cartaoId,req.body.matricula],(err,result)=>{
            if(err){
                throw err;
            }else{
                response = res.status(200).json(result);
            }
        });
        db.end();

        return response;
    }

    static updateUsuario(req,res){
        let response;

        db.query("UPDATE usuario set nome = (?), matricula = (?) where cartao_id = (?)",[req.body.nome,req.body.matricula,req.body.cartaoId],(err,result)=>{
            if(err){
                throw err;
            }else{
                response = res.status(200).json(result);
            }
        });
        db.end();

        return response;
    }
}

module.exports = UsuarioService;