const db = require("../configDb");

class UsuarioService{

    static getUsuarioIdByEmail(req,res){
        let email = Object.keys(req.body)[0];
        db.query("SELECT id FROM usuario WHERE email = (?)",[email],(err,result)=>{
            if(err){
                res.send(err).status(404);
            }else{
                res.send(result).status(200);
            }
        });
        
    }

    static postUsuario(req,res){
        db.query(
            "INSERT INTO usuario (nome,matricula,email,telefone) values (?,?,?,?)",
            [req.body.nome,req.body.matricula,req.body.email,req.body.telefone],
            (err,result)=>{
                if(err){
                    res.send(err).status(500);
                }
                else{
                    res.send(result).status(200);
                }
            }
        );
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