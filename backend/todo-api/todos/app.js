const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')


router.use(cors())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

const todos = [
    { id: 1, text: 'Learn React', isDone: true },
    { id: 2, text: 'SAMplify your app', isDone: true },
    { id: 3, text: 'World Domination', isDone: true }
]

router.get('/', function(req, res){
    res.json({msg: 'response from api'})
})

router.get('/todos', function(req,res){
    res.json({ data: todos})
})

router.post('/todos', function(req, res){
    const newTodo = { id: todos.length() + 1, text: req.body.text, isDone: false}
    todos.append(newTodo)
    return res.json({ data: newTodo })
})

router.put('/todos/:id', function(req,res){
    const index = todos.findIndex(rec=> rec.id === req.params.id)
    todos[index].text = req.body.text
    return res.json({ data: todos[index] })
})

router.delete('/todos/:id', function(req, res){
    const index = todos.findIndex(rec=> rec.id === req.params.id)
    delete todos[index]
    return res.status(200).end()
})

app.use('/', router)

module.exports = app