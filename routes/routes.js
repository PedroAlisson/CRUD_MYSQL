const express = require('express')
const PessoasController = require('../controllers/ControllerPessoas')

const pessoasRouter = ({connection}) => {
    const router = express.Router()
    router.get('/', PessoasController.index.bind(null, connection))  
    router.get('/delete/:id', PessoasController.deleteOne.bind(null, connection))
    router.get('/create', PessoasController.createForm)  
    router.post('/create', PessoasController.create.bind(null, connection)) 
    router.get('/update/:id', PessoasController.updateForm.bind(null,connection))  
    router.post('/update/:id', PessoasController.update.bind(null,connection)) 
    return router
}


module.exports = pessoasRouter