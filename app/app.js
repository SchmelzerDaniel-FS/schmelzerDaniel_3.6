const express  = require('express')
const ejs = require('ejs')
const app = express()
const router = require('../api/router/routes')
const { urlencoded } = require('express')

app.use(express.urlencoded({extended: true}))

// All requres will handle json
app.use(express.json())

// Handle CORS
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Acess-Control-Allow-Headers', 
        'Origin, X-Reqested-With, Content-Type, Accept, Authorization'
    )
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE')
    }
    next()
})

// Middleware for EJS Templating
app.set('view engine', 'ejs')
app.engine('ejs', require('ejs').__express)

// Static Site (Middleware)
app.use(express.static('public'))
app.use(express.static('views'))

app.use('/', router)

// Error handling (Middleware)
app.use((req, res, next) => {
    const error = new Error('Not Found!')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status
        }
    }) 
})

module.exports = app