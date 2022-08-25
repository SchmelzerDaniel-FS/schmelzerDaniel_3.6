const userName = 'Mike@aol.com'
const userPass = 'abc123'
const usernameInput = document.getElementById('username').value
const userPassInput = document.getElementById('password').value
const userLogin = () => {
    if(userPassInput != userPass){
        password = false
    }else{
        password = true
    } 
    
    if(usernameInput != userName){
        username = false
    }else{
        username = true
    }

    if(username === true || password === true){
        return true
    }else{
        return false
    }
}

module.exports = userLogin