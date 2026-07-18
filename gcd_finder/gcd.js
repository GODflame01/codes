// given an integer array nums,return the gcd of the smallest number and the greatest number of that array nums

// let a= 10;
// let b= 12;
// let gcd = 1;

// for(let i=1;i<=Math.min(a,b);i++){
//     if(a % i===0 && b % i===0){
//         gcd=i;
//     }
// }
// console.log(gcd)


let nums= [9,11,12,32,4,5];
let smallest=nums[0];
let greatest=nums[0];
let gcd = 1;
for(let i=0; i<=nums.length;i++){
    if(nums[i]<smallest){
        smallest=nums[i];
    }
}
console.log(`this is the shortest number in array: ${smallest}`)
for(let i=0; i<=nums.length;i++){
    if(nums[i]>greatest){
        greatest=nums[i];
    }
}
console.log(`this is the greatest number in array: ${greatest}`)

for(let i=1;i<=Math.min(smallest,greatest);i++){
    if(smallest%i===0 && greatest%i===0){
        gcd=i
    }
}
console.log(`greatest common divisior of ${smallest} and ${greatest}: ${gcd}`)