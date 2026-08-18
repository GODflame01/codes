// for to-do list container in which the task were placed 

// these codes are only for box shadow transition effect :)

let todo = document.querySelector(".to-do-list-container");

todo.addEventListener("mouseenter", function () {
    todo.style.boxShadow = "none";
});

todo.addEventListener("mouseleave", function () {
    todo.style.boxShadow = " 5px 5px 2px black";
});






//for the sidebar
let sidebarul = document.querySelector(".sidebar-ul");

sidebarul.addEventListener("mouseenter", function () {
    sidebarul.style.boxShadow = "none";
});

sidebarul.addEventListener("mouseleave", function () {
    sidebarul.style.boxShadow = " 5px 5px 2px black";
});









// for the text area
let task = document.querySelector("#task");
task.addEventListener("mouseenter", function () {
    task.style.boxShadow = "none";
});
task.addEventListener("mouseleave", function () {
    task.style.boxShadow = " 5px 5px 2px black";
});








// for completed tasks div 
let complete = document.querySelectorAll(".complete");
complete.forEach(function (item) {
    
    item.addEventListener("mouseenter", function () {
        item.style.boxShadow = "-4px 2px black"
        item.style.backgroundColor = "rgb(103, 229, 128)"
    });
    item.addEventListener("mouseleave", function () {
        item.style.boxShadow = "none"
        item.style.backgroundColor = "white"
    });
    
    
    let todoitem = item.closest("#todo-item");
    item.addEventListener("click", function () {
        
        let tick = todoitem.querySelector(".tick");
        
        tick.classList.toggle("show")
        if (tick.classList.contains("show")) {
            todoitem.style.backgroundColor = "rgb(195, 245, 226)"

        } else {
            todoitem.style.backgroundColor = "whitesmoke"

        }
    });
});


// for delete tasks div 
let deleted = document.querySelectorAll(".delete");
deleted.forEach(function (delt) {

    delt.addEventListener("mouseenter", function () {
        delt.style.boxShadow = "-4px 2px black"
        delt.style.backgroundColor = "rgb(203, 1, 34)"
        console.log("entered")
    });
    delt.addEventListener("mouseleave", function () {
        delt.style.boxShadow = "none"
        delt.style.backgroundColor = "white"
        console.log("left")

    });

});