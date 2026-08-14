function applytheme(theme){
    document.body.classList.remove("light","dark")
    document.body.classList.add(theme);
    
}
function systemtheme(){
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
    else{
        document.body.classList.remove("dark");
        document.body.classList.add("light");
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
            document.body.classList.remove("dark")
            document.body.classList.add("light")
        }
        else{
            document.body.classList.remove("light")
            document.body.classList.add("dark")

        }
    })
}
toggle();


    