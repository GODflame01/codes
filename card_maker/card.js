let form = document.querySelector("form");
let inputs = document.querySelectorAll("input")

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    console.log(dets.target[0].value,dets.target[1].value,dets.target[2].value,dets.target[3].value);
})
