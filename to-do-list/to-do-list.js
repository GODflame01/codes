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
let addbtn = document.querySelector(".Add-btn");
task.addEventListener("mouseenter", function () {
    task.style.boxShadow = "none";
});
task.addEventListener("mouseleave", function () {
    task.style.boxShadow = " 5px 5px 2px black";
});

let todocontent = document.querySelector(".todo-content")
addbtn.addEventListener("click", function () {

    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerHTML =
        `<div class="complete"><span class="tick">✔</span></div>
                        <div class="todo-task">${task.value}</div>
                        <div class="delete"><span class="cross">✘</span></div>`
    // trim() - helps to remove extra spaces and also help to detect whether the input is just filled with space ..and to stop that empty task from entering into todo-list container
    if (task.value.trim() === "") {
        alert("please enter a todo task first!! ")
    } else {

        todocontent.appendChild(li);
        task.value = "";
        task.focus();
    }

});

task.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addbtn.click();
    }
})




// for tick 
todocontent.addEventListener("click", function (e) {
    if (e.target.closest(".complete")) {
        const todoitem = e.target.closest(".todo-item")
        let tick = todoitem.querySelector(".tick")
        let todotask = todoitem.querySelector(".todo-task")


        if (tick.classList.toggle("show")) {
            todoitem.style.backgroundColor = "rgb(195, 245, 226)"
            todotask.style.textDecoration = "line-through"
        } else {
            todoitem.style.backgroundColor = "whitesmoke"
            todotask.style.textDecoration = "none"

        }
    }
});


// this is for finsh-all button :)
let finishall = document.querySelector("#finish-all")
finishall.addEventListener("click", function (e) {
    const todoitem = todocontent.querySelectorAll(".todo-item");
    if (confirm("do you want to mark all tasks done?")) {
        todoitem.forEach(function(allitem){
        
            const tick = allitem.querySelector(".tick")
        const todotask = allitem.querySelector(".todo-task")
        
        tick.classList.add("show")
        allitem.style.backgroundColor = "rgb(195, 245, 226)"
        todotask.style.textDecoration = "line-through"
       })

    }
})

//for mark all done button ...just created a event listner and linked it to finishall button ..
let markallbtn= document.querySelector(".mark-all-btn")
markallbtn.addEventListener("click",function(e){
    finishall.click();
})


//for delete
todocontent.addEventListener("click", function (e) {
    if (e.target.closest(".delete")) {
        const todoitem = e.target.closest(".todo-item")
        let cross = todoitem.querySelector(".cross")
        if (confirm("do you want to delete this task?")) {
            todoitem.remove();
        }
    }
})


// this is for clear-all button 
let clearall = document.querySelector(".clear-all");
clearall.addEventListener("click", function (e) {
    const todoitem = document.querySelectorAll(".todo-item");
    if (confirm("do you really want to clear all tasks?")) {
        todoitem.forEach(function (allitem) {
            allitem.remove();
        })

    }

})


// footer 

let footer = document.querySelector("footer");

