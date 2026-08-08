let form = document.querySelector("form");
let inputs = document.querySelectorAll("input")
let main = document.querySelector("#main");

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    // console.log(dets.target[0].value,dets.target[1].value,dets.target[2].value,dets.target[3].value);
    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src",dets.target[0].value);
    
    let imgurl = img.getAttribute("src")
    if(imgurl === ""){
        alert("please enter your profile  url! ");
        return;
    }
    
    let name= document.createElement("h2");
    name.textContent = dets.target[1].value;
    
    if(name.textContent === ""){
        alert("please enter your name! ");
        return;
    }
    
    let email = document.createElement("h4");
    email.textContent = dets.target[2].value;
    if(email.textContent === ""){
        alert("please enter your email! ");
        return;
    }
    
    let info = document.createElement("p");
    info.textContent = dets.target[3].value;
    if(info.textContent === ""){
        alert("please enter your info! ");
        return;
    }

        profile.appendChild(img);
        card.appendChild(profile);
        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(info);
        main.appendChild(card);


    inputs.forEach(function(inp){
        if(inp.type!== "submit"){
            inp.value = "";
        }
        
    }); 
    

});
