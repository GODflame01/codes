// for to-do list container in which the task were placed 

// these codes are only for box shadow transition effect :)


let todo = document.querySelector(".to-do-list-container");

todo.addEventListener("mouseenter",function(){
    todo.style.boxShadow = "none";
});

todo.addEventListener("mouseleave",function(){
    todo.style.boxShadow = " 5px 5px 2px black";
});

//for the sidebar
let sidebarul = document.querySelector(".sidebar-ul");

sidebarul.addEventListener("mouseenter",function(){
    sidebarul.style.boxShadow = "none";
});

sidebarul.addEventListener("mouseleave",function(){
    sidebarul.style.boxShadow = " 5px 5px 2px black";
});

// for the text area
let task= document.querySelector("#task");
task.addEventListener("mouseenter",function(){
    task.style.boxShadow = "none";
});
task.addEventListener("mouseleave",function(){
    task.style.boxShadow = " 5px 5px 2px black";
});

// for completed tasks div 
let complete = document.querySelector(".complete");
complete.addEventListener("mouseenter", function(){
    complete.style.boxShadow="-4px 2px black"
    complete.style.backgroundColor="rgb(71, 169, 71)"
});
complete.addEventListener("mouseleave",function(){
    complete.style.boxShadow="none"
    complete.style.backgroundColor="white" 
});

complete.addEventListener("click",function(){
   if(complete.textContent= "✔"){
    complete.textContent=" "
   }
    
})
// for completed tasks div 
let deleted = document.querySelector(".delete");
deleted.addEventListener("mouseenter", function(){
    deleted.style.boxShadow="-4px 2px black"
    deleted.style.backgroundColor="rgb(203, 1, 34)"
});
deleted.addEventListener("mouseleave",function(){
    deleted.style.boxShadow="none"
    deleted.style.backgroundColor="white"
    
});