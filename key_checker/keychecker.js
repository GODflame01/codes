let h3 = document.querySelector("#main")

window.addEventListener("keydown",function(dets){
    if((dets.key)===" "){
        h3.textContent= "SPC"
    }
    else{
        h3.textContent = dets.key
    }
})