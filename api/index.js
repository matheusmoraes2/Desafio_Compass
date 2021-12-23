const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const NaoEncontrado = require('./erros/NaoEncontrado')
const CampoInvalido = require('./erros/CampoInvalido')
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos')
const valorNaoSuportado = require('./erros/ValorNaoSuportado')
const formatosAceitos = require('./Serializador').formatosAceitos

app.use(bodyParser.json());

app.use((req, res, proximo) => {
    let FormatoReq = req.header('Accept')

    if(FormatoReq === '*/*'){
        FormatoReq = 'application/json'
    }

    if(formatosAceitos.indexOf(FormatoReq) === -1 ){
        res.status(406)
        res.end()
        return
    }

    res.setHeader('Content-Type' , FormatoReq)
    proximo()

})

const roteador = require('./rotas/task')
app.use('/api/task', roteador);

app.use((erro, req, res, proximo) => {
    let status = 500

    if(erro instanceof NaoEncontrado){
        status = 404
    }
    if(erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos){
        status = 400
    }
    if(erro instanceof ValorNaoSuportado){
        status = 406
    }

    res.status(status)
    res.send(
        JSON.stringify({
            mensagem: erro.message,
            id: erro.idErro
    }))
})


app.listen(3000, () => console.log('A API está funcionando!'));
