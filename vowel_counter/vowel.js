//the vowel counter: you need to create a function that counts the number of vowel in a given string . consider both uppercase and lowercase vowels //

let str = "this is flame op and thIs is the solution for vowel cOunter";
let vowel = ["a","e","i","o","u"]
let count = 0;

function vowelcounter(){
    str = str.toLowerCase();
    newstr= str.split("")
    for(letter of newstr){
        for(lett of vowel){
            
            if(letter===lett){
                count+=1
            }
        }
    }
    console.log(count)
}
vowelcounter()