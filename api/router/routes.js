const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    session = req.session
    res.render('index', {
        pagename: 'Home'
    })
})

router.get('/signIn', (req, res) => {
    session = req.session
    res.render('signIn', {
        pagename: 'Sign In'
    })
})

router.post('/signIn', (req, res) => {
    if(userLogin() != false){
        live = true
    }
    if (live){
    session = req.session
    session.userid = 'Mike'
    res.render('index', {pagename: 'Home', sess: session})
    } else {
        res.render('signIn', {pagename: 'Sign-In', error: 'Invalid Username and/or Password!'})
    }
})
module.exports = router