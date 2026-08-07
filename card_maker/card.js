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
    img.setAttribute("src","https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D")

    let name= document.createElement("h2");
    name.textContent = "your name"

    let email = document.createElement("h4");
    email.textContent = "test@gmail.com";

    let info = document.createElement("p");
    info.textContent = "this is the description area ..you can tell something about yourself...:)"

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(name);
    card.appendChild(email);
    card.appendChild(info);

    main.appendChild(card);

})
