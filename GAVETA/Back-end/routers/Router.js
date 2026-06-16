const express = require('express')
const router = express.Router()

const upload = require('../services/uploadConfig')
const db = require('../services/firebase')

router.post('/memories', upload.single('imagem'), async (req, res) => {
    try {
        const dataUser = req.body
        const linkImage = req.file.path

        const sendMemories = {
            aprovadaPorAdm: '',
            categoriaMemoria: '',
            contatoAutor: [dataUser.email, dataUser.contato],
            dataMemoria: dataUser.data,
            imagensURL: linkImage,
            nomeAutor: dataUser.nome,
            ponto_memoria: dataUser.local,
            postada: false,
            recusada: false,
            relatoMemoria: dataUser.texto,
            tags: JSON.parse(dataUser.tags),
            titulo: dataUser.titulo,
            dataCriacao: new Date()
        }

        const resDB = await db.collection('memorias').add(sendMemories)
        console.log('Salvo com sucesso! o ID do documento é: ', resDB.id)
        return res.status(201).json({ 
            message: 'Dados recebidos.',
        id: resDB.id
        })
    } catch (error) {
        console.log("Error ao salvar: ", error)
        res.status(500).json({erro: "Erro interno ao salvar a memória."})
    }

})

module.exports = router