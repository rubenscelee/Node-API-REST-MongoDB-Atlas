
const router = require('express').Router()

//Importando a entidade Person
const Person = require('../models/Person')

// Rotas da API
router.post('/', async (req, res)=> {

    //req.body
    
    const {name, salary, approved} = req.body

    if(!name){
        res.status(422).json({error: 'O nome é obrigatório.'})
        return
    }

    const person = {
        name,
        salary,
        approved,
    }

    //create
    try{
        await Person.create(person)

        res.status(201)
        res.json({message: 'Pessoa inserida no banco com sucesso!'})

    } catch(error){
        res.status(500).json({error: error})
    }
})

// REad - Leitura de dados
router.get('/', async (req, res) => {
 
    //create
    try{
        //Método para trazer todos as pessoas cadastradas para dentro da variável "people"
        const people = await Person.find()

        res.status(200).json({people})


    } catch(error){
        res.status(500).json({error: error})
    }
})

//Acessar por pessoa
router.get('/:id', async(req, res)=> {


    const id = req.params.id
    try{
        const person = await Person.findOne({_id: id})

        if(!person){
            res.status(422).json({message: 'Pessoa não encontrada.'})
            return
        }

        res.status(200).json({person})

    } catch(error){
        res.status(500).json({error: error})
    }
})

//Update - Atualização de dados (PUT, PATCH)
router.patch('/:id', async (req, res)=>{
    const id = req.params.id

    const {name, salary, approved} = req.body

    const person = {
        name,
        salary,
        approved,
    }

    try{
        const updatePerson = await Person.updateOne({_id: id}, person)
        
        //Verifica quantos registros ele atualizou
        if(updatePerson.matchedCount === 0) {
            res.status(422).json({message: 'Pessoa não encontrada.'})
            return
        }

        res.status(200).json(person)

    } catch(error){
        res.status(500).json({error: error})
    }
})

//Deletar
router.delete('/:id', async (req, res)=>{
    const id = req.params.id

  
    const person = await Person.findOne({_id: id})
        
    //Verifica se a pessoa existe no banco
    if(!person) {
        res.status(422).json({message: 'Pessoa não encontrada.'})
        return
    }

    try{
        await Person.deleteOne({_id: id})

        res.status(200).json({message: 'Pessoa removido do banco com sucesso.'})

    } catch(error){
        res.status(500).json({error: error})
    }
})

module.exports = router
