const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const mysql = require('mysql')
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user:'root',
    password: '',
    database: 'cadastro'
})

const dependecies = {
    connection
}
const routes = require('./routes/routes')
app.get('/', (req,res) => res.render('home'))
app.use('/pessoas', routes(dependecies))


connection.connect(() =>{
    app.listen(port, () => console.log('Starting na porta', + port) )
})

