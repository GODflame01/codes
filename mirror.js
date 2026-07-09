// the mirror mirror. imagine you have string, and you need to  create a new string that is a mirror of the original.write a function that appends the reverse of the original string to itself.

let str = "hello";
function original(){
    // for(i=str.length-1;i>=0;i--){                           //this is bby using for loop 
    //     reduce= str[i]+reduce;
    //     console.log(reduce)
    // }
    let reversed = str.split("").reverse().join("");
    console.log(`mirror text is  ${str}${reversed}`)
}
original()