// the sumselector: your are working on a function that should sum all numbers in an array until it encounters a negative number.write a function that performs this summation//


let arr= [1,2,3,4,-5,6,7]
let sum = 0
function sumation(){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            break;
        }
        else{
            sum+=arr[i]    
            console.log(sum)
        }

    }
}
sumation()
// completed