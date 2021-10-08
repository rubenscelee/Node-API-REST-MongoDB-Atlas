// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

 
 

//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

// rotas da api
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)
 
//Configurando rota inciial
app.get('/', function(req, res) {
    //Mostrar req
    res.json({message: 'Oi Express'})

})

//mongodb+srv://rubens:5$v-hgPCYnz329a@apicluster.blns9.mongodb.net/bancodaapi?retryWrites=true&w=majority
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


 
