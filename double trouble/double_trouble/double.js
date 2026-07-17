// the double trouble: you are tasked with writng a function that doubles each element in an array. however, theres a catch: if the array contains consecutive duplicate elements, only double one of them 


let arr = [1,2,3,4,4,2,2,3,1];
let duplicate= "";
function double(){
    for(let i=0; i<=arr.length-1;i++){
        if(arr[i]===arr[i+1]){
            arr[i]*=2
        }
        
        console.log(arr[i],arr[i+1])
    }
    
}
double()