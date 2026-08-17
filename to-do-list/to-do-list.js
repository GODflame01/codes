let todo = document.querySelector(".to-do-list-container");

todo.addEventListener("mouseenter",function(){
    todo.style.boxShadow = "none";
});

todo.addEventListener("mouseleave",function(){
    todo.style.boxShadow = " 5px 5px 2px black";
});

let sidebar = document.querySelector("ul");

sidebar.addEventListener("mouseenter",function(){
    sidebar.style.boxShadow = "none";
});

sidebar.addEventListener("mouseleave",function(){
    sidebar.style.boxShadow = " 5px 5px 2px black";
});

let task= document.querySelector("#task");
task.addEventListener("mouseenter",function(){
    task.style.boxShadow = "none";
});
task.addEventListener("mouseleave",function(){
    task.style.boxShadow = " 5px 5px 2px black";
});