const registerUsername = document.querySelector('.username-register')
const registerPassword = document.querySelector('.password-register')

const infoAccount = document.querySelector('.info');

const submitRegister = document.querySelector(".submit-register");
submitRegister.addEventListener('click', function() {
    if(registerUsername.value == "") {
        console.log('empty username')
        alert("Vul een gebruikersnaam in!")
    } else {
        console.log("not empty username")
    }

    if(registerPassword.value == "") {
        console.log('empty password') 
        alert("Vul een wachtwoord in!")
    } else {
        console.log('not empty password')
    }

    saveData()
})

function saveData() {
    localStorage.setItem('Naam', registerUsername.value)
    localStorage.setItem('Wachtwoord', registerPassword.value)
    infoAccount.innerHTML += `Account Made Succesfully`
}
