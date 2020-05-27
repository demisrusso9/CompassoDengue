const conexao = require('../../config/conexao/conexaoDatabase');

class CidadaoDAO {
    adiciona(cidadao, res) {
        const sql = `INSERT INTO cidadao SET ?`

        const novoCidadao = {nome: cidadao.nome,
                            cpf: cidadao.cpf,
                            telefone: cidadao.telefone}
        conexao.query(sql, novoCidadao, (erro) => {
            if(erro){
                res.status(400).json(erro);
                console.log("Erro ao cadastrar cidadao: "+erro);
            } else {
                res.status(201).json(novoCidadao);
                console.log(novoCidadao);
            }
        })
    }
    lista(res){
        const sql = `SELECT * FROM cidadao`

        conexao.query(sql, res, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado)
            }
        })

    }
}

module.exports = new CidadaoDAO;