let progress = document.querySelector(".progress");
let percentage = document.querySelector("#percentage");
let count = 0;
setInterval(function(){
    if(count<99){
        count++
        progress.style.width=`${count}%`
        percentage.textContent=`${count}%`
        
    }
},50);