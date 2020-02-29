const pessoas = require('../models/ModelPessoas')

const index = async(connection, req, res) => {
    const results = await pessoas.findAll(connection)
    res.render('pessoas/index', {
        pessoas: results})
}

const deleteOne = async(connection, req, res) =>{
    await pessoas.deleteOne(connection, req.params.id)
    res.redirect('/pessoas')
}

const createForm = (req,res) =>{
    res.render('pessoas/new')
}

const create = async(connection, req,res) =>{
   await pessoas.create(connection, req.body)
   res.redirect('/pessoas')

}

const updateForm = async(connection,req,res) =>{
    const pessoa = await pessoas.findById(connection, req.params.id)   
    res.render('pessoas/update',{
        pessoa
    })
}

const update = async(connection,req,res) =>{
   await pessoas.update(connection,req.params.id, req.body)
   res.redirect('/pessoas')

}

    module.exports = {index,deleteOne,createForm,create,updateForm,update}