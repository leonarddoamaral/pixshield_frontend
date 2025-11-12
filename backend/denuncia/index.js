const express = require('express');
const bodyParser=require('body-parser');
const mysql = require('mysql2');

//criar a conexão com o banco de dados
const db=mysql.createConnection({
    host:'localhost', //
    user:'root', //usuario do mysql
    password:'', //sua senha do mysql
    database:'sistema' //nome do banco de dados
}
);

//Conectar com o banco de dados

db.connect((err)=>{
    if(err){
        console.error('Erro ao conectar no banco de dados');
        return;
    }
    console.log('Conectado com sucesso');
}
);

//Criar o App

var app=express();
app.use(bodyParser.json());
//Rota inicial

app.get('/',(req, res)=>{
    res.send('API funcionando');
});

//Inserir os Dados (post)
app.post('/denuncias',(req, res)=>{
    var {id, conteudo, descricao, data, idUsuario, idChave}=req.body;
    if(!id || !conteudo || !descricao || !data || !idUsuario || !idChave){
        return res.status(400).json({erro:'Todas as informações são obrigatórias'});
    }
    var sql='INSERT INTO denuncias(id, conteudo, descricao, data, idUsuario, idChave)VALUES(?,?,?,?,?,?)';
    db.query(sql,[id, conteudo, descricao, data, idUsuario, idChave],(err, result)=>{
        if(err){
            console.error('Erro ao Inserir:',err);
            return res.status(500).json({erro:'Erro ao inserir no banco de dados'});
        }
        res.status(201).json({
           mensagem:'Denuncia Inserida com sucesso',id: result.insertId
        });
    }
);
}
);

//Listar todas as denuncias(Get)
app.get('/denuncias',(req, res)=>{
    var sql='SELECT * FROM denuncias';
    db.query(sql,(err, results)=>{
        if(err){
            console.error('Erro ao buscar as denuncias:',err);
            return res.status(500).json({erro:'Erro ao buscar no banco de dados'});
        }
        res.status(200).json(results);
    });
});

