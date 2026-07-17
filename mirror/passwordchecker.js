// the password validator ..creaate aa function that check if a given password meets the following criteria :aat least 8 charaacter long,contain both uppercaase and lower case,include atlease one digit..


let password = prompt("Enter a password: ");

let hasuppercase = false;
let haslowercase = false;
let hasdigit = false;

function password_checker() {
    for (let i = 0; i < password.length; i++) {
        let code = password.charCodeAt(i); //using ascii code to check whether the character is in uppercase or lowercase
        if (password.length < 8) {
            alert("password should be atleast 8 characterlong!!")
            return;
        }
        else if (code >= 65 && code <= 90) {
            hasuppercase = true;
        }
        else if (code >= 97 && code <= 122) {
            haslowercase = true;
        }
        else if (code >= 48 && code <= 57) {
            hasdigit = true;
        }
        
    }
    if(!hasuppercase){
        alert("password must contain uppercase characters!!!")
        return;
    }
    if(!haslowercase){
        alert("password must contain lowercase characters!! ")
        return;
    }
    if(!hasdigit){
        alert("password must contain atleast a single digit!!")
        return;
    }
    if (hasuppercase && haslowercase && hasdigit) {
        alert("congrats your password has been set successfully!!")
        return;
    }
    else {
        alert("something is wrong!, please enter the password in given criteria")

    }
}
password_checker();