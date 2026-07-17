//the vowel counter: you need to create a function that counts the number of vowel in a given string . consider both uppercase and lowercase vowels //

let str = "this is flame op and thIs is the solution for vowel cOunter and this is the updated version without split";
let vowel = ["a","e","i","o","u"]
let count = 0;

function vowelcounter(){
    str = str.toLowerCase();
    // let newstr= str.split("")
    for(let letter of str){
        for(let v of vowel){
            
            if(letter===v){
                count++;
            }
        }
    }
    console.log(count)
}
vowelcounter()