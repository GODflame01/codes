let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("form")

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/;
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);
    
    let emailerr = document.querySelector("#emailerror");
    let passworderr = document.querySelector("#passworderror");

    if(!emailans){
       emailerr.textContent = "email didn't match it's criteria";
       email.style.border='3px solid red'
    }else{
        emailerr.textContent = ""
        email.style.border='none'
        
    }
    
    if(!passwordans){
        password.style.border='3px solid red'
        passworderr.textContent = "password didn't match it's criteria";
    }
    else{
        password.style.border='none'
        passworderr.textContent = ""
    }
})