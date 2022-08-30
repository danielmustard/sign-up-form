const password = document.querySelector('#password')
const confirm_password = document.querySelector('#confirm_password')
const notify = document.querySelector('#password_match')

const verifyMatch = () =>{
    if (password.value == confirm_password.value){
        notify.innerHTML = "Passwords Match :)"
        notify.style.color = 'green'
        password.style.background = 'green'
    }else{
        notify.innerHTML = "Passwords DO NOT match"
        notify.style.color = 'red'
    }
}
