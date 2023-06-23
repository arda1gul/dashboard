console.log("JavaScript Loaded");

const loginUsername = document.querySelector(".username")
const loginPassword = document.querySelector(".password")

const infoAccount = document.querySelector('.info');

const submit = document.querySelector(".submit");
submit.addEventListener('click', function () {
    let name = localStorage.getItem('Naam')
    let password = localStorage.getItem('Wachtwoord')
    if (loginUsername.value == name && loginPassword.value == password) {
        infoAccount.innerHTML += `Succesvol ingelogd`
        infoAccount.classList.add('right-info')
        window.location.href = 'home.html'
    } else {
        location.reload()
        alert(`Foute Gebruikersnaam of Wachtwoord`)
    }
})