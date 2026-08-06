let btn= document.querySelector("p");
let file = document.querySelector("#file")

btn.addEventListener("click",function(dets){
    file.click();
});

file.addEventListener("change",function(dets){
    if(file){
        btn.textContent=dets.target.files[0].name;
    }
    else{
        btn.textContent= "SELECT FILE"
    }
    // console.dir(dets);
})