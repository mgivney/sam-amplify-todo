const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')


router.use(cors())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

router.get('/', function(req, res){
    res.json({msg: 'response from api'})
})

app.use('/', router)

module.exports = app