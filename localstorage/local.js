function applytheme(theme){
    document.body.classList.remove("light","dark")
    document.body.classList.add(theme);   
}
function systemtheme(){
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        return "dark";
    }
    else{
        return "light";
    }
}

function setinitialtheme(){
    const saved_theme = localStorage.getItem("theme");
    applytheme(saved_theme || systemtheme())
}
setinitialtheme();

function toggle(){
    let btn = document.querySelector("button");
    btn.addEventListener("click",function(){
        if(document.body.classList.contains("dark")){
            applytheme("light")
            localStorage.setItem("theme","light");
        }
        else{
           applytheme("dark")
            localStorage.setItem("theme","dark");

        }
    })
}
toggle();





    