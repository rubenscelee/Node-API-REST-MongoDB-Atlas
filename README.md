# Node-API-REST-MongoDB-Atlas
Crud utilizando NodeJs, express.js, MongoDB Atlas, mongoose, e testes de api com o Postman.
Projeto em andamento para integração com front-end.




Criando api rest em NodeJS 

- Rodar o comando "npm init -y" para iniciar um projeto.
- Instalar os pacotes necessários "npm install express nodemon mongoose"
- Criar o script no packet.json para o nodemon:
     *"start": "nodemon ./index.js localhost 3000"
-Rodar "npm start" para iniciar o projeto.


- Importar o express e o mongoose
     const express = require('express')
     const mongoose = require('mongoose')
     const app = express()

- Forma de ler JSON utilizando Middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

- Rotas da API
// Rotas da API
app.post('/person', async (req, res)=> {

    //req.body
    
    const {name, salary, approved} = req.body

    const person = {
        name,
        salary,
        approved
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


- Configurar rota inicial / endpoint
app.get('/', function(req, res) {

    res.json({message: 'hello world'})

})

-Porta a qual o projeto irá escutar
app.listen(3000)



Criar o projeto no Mongo Atlas. 

//conectar com o banco
mongoose.connect(
    'mongodb+srv://rubens:5$v-hgPCYnz329a@apicluster.blns9.mongodb.net/bancodaapi?retryWrites=true&w=majority'
    )
.then(() => {
    console.log("Conectamos ao MongoDB!")
    //Porta a qual o projeto irá escutar
    app.listen(3000)
})
.catch((err) => console.log(err))


//Criar uma pasta "models" para criar as entidades do banco
   * O código dentro desta pasta está comentado.

//Criar uma pasta "routes", com o arquivo personRoutes.js, para armazenar as rotas
da 
