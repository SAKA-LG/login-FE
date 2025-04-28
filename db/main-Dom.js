document.title = 'Login'
const card = document.getElementById('card-sign')
const img = document.getElementById('img-right')
const titleCard = document.getElementById('title-card')
const body = document.body
const signButton = document.getElementById('sign-button')
const loginButton = document.getElementById('login-button')
const nameCard = document.getElementById('name-card')
//! AAAAAA CONST HELL ANJIR
const titleCardDesc = document.getElementById('title-card-desc')
const submitButton = document.getElementById('submit-button')
const gambarLanisa = document.getElementById('img-lansia')
const appleTitle = document.getElementById('apple-title')
const googleTitle = document.getElementById('google-title')
const textCoverTop = document.getElementById('text-cover-top')
const textCoverBottom = document.getElementById('text-cover-bottom')

function login() {
    textCoverTop.innerText = 'Membantu anak'
    textCoverBottom.innerText = 'Kurang pendidikan'
    appleTitle.innerText = "Login with ID Apple"
    googleTitle.innerText = 'Login with Google'
    gambarLanisa.src = '/img/anak_Indonesia.png';
    titleCardDesc.innerText = ' back👋'
    submitButton.innerText = 'Login'
    signButton.style.backgroundColor = 'white'
    signButton.style.border = '0.5'
    signButton.style.color = 'black'
    loginButton.style.backgroundColor = 'black'
    loginButton.style.color = 'white'
    nameCard.style.opacity = '0'
    titleCard.innerText = 'Welcome,'
}

function sign() {
    signButton.style.backgroundColor = 'black'
    signButton.style.color = 'white'
    loginButton.style.backgroundColor = 'white'
    loginButton.style.border = '0.5'
    loginButton.style.color = 'black'
    textCoverTop.innerText = 'Membantu lansia'
    textCoverBottom.innerText = 'di panti Jompo '
    appleTitle.innerText = "Sign up with ID Apple"
    googleTitle.innerText = 'Sign up with Google'
    gambarLanisa.src = '/img/lansia.png';
    submitButton.innerText = 'Sign up'
    titleCardDesc.innerText = ' for free'
    nameCard.style.opacity = '1'
    titleCard.innerText = 'sign'
}