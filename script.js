const emailInputEl = document.getElementById('email-input')
const subscribeButton = document.getElementById('')
const errorMsg = document.querySelector('.nl-error')

function verifyEmail(e){
    if(!validateEmail(e.target.value)){
          errorMsg.style.display = "block";
    }else{
        errorMsg.style.display = "none";
    }
}

emailInputEl.addEventListener('focusout', verifyEmail)



function validateEmail(s){
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(s.match(validRegex)){
        return true;
    }else{
        return false;
    }
}