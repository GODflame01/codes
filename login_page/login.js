let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("form")

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    if(!emailans){
       let email_error = document.querySelector("#emailerror");
       email_error.textContent = "email didn't match it's criteria";
    }
    if(!passwordans){
        let password_error = document.querySelector("#passworderror");
        password_error.textContent = "password didn't match it's criteria";
    }
    else{
        password_error.style.display ="none"
    }

    }
})