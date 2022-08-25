let errors = {}

const validate = (req) => {
    console.log('here');
    const username = req.body.username
    const pass = req.body.password

    const usernameCheck = /^[A-Za-z. ]{3,20}$/
    const passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/

    if(usernameCheck.test(username)){
        errors.usernameMsg = 'Username does not match!'
    }
    else if(passCheck.test(pass)){
        errors.passMsg = 'Password does not match!'
    }
    document.getElementById('submitButton').onsubmit()
    return errors
}

module.exports = validate