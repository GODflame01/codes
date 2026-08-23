// for local storage 
let todos = JSON.parse(localStorage.getItem("task")) || [];
function savetodos(){
    localStorage.setItem("task",JSON.stringify(todos));
}

function addtolocalstorage(){
    let todo = {
        text: task.value,
        completed : false
    };
    todos.push(todo);
    savetodos();

    return todo;
}

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

function loadtodo(todo){
        
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.dataset.index = todos.indexOf(todo);
    li.innerHTML =
        `<div class="complete"><span class="tick">✔</span></div>
                        <div class="todo-task">${todo.text}</div>
                        <div class="delete"><span class="cross">✘</span></div>`

    todocontent.appendChild(li);
}
todos.forEach(function(todo){
    loadtodo(todo);
})


addbtn.addEventListener("click", function () {

    // trim() - helps to remove extra spaces and also help to detect whether the input is just filled with space ..and to stop that empty task from entering into todo-list container
    if (task.value.trim() === "") {
        alert("please enter a todo task first!! ")
    } else {
    let todo = addtolocalstorage();

    
        loadtodo(todo);
        updatecount();
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
        const index = todoitem.dataset.index;
        const todo = todos[index]
        let tick = todoitem.querySelector(".tick")
        let todotask = todoitem.querySelector(".todo-task")

        todo.completed =!todo.completed


        if (todo.completed) {
            tick.classList.add("show")
            todoitem.style.backgroundColor = "rgb(195, 245, 226)"
            todotask.style.textDecoration = "line-through"
            // todo.completed = true;
            
        } else {
            tick.classList.remove("show")
            todoitem.style.backgroundColor = "whitesmoke"
            todotask.style.textDecoration = "none"
            // todo.completed = false;

     
        }
        savetodos();
    }
});


// this is for finsh-all button :)
let finishall = document.querySelector("#finish-all")
finishall.addEventListener("click", function () {
    if (confirm("do you want to mark all tasks done?")) {
        const todoitem = todocontent.querySelectorAll(".todo-item");
        todoitem.forEach(function(allitem){
        const index = allitem.dataset.index;
            const todo = todos[index];
            const tick = allitem.querySelector(".tick")
        const todotask = allitem.querySelector(".todo-task")
        
        todo.completed= true;

        tick.classList.add("show")
        allitem.style.backgroundColor = "rgb(195, 245, 226)"
        todotask.style.textDecoration = "line-through"
       })

       savetodos();
    }
})

//for mark all done button ...just created a event listner and linked it to finishall button ..
let markallbtn= document.querySelector(".mark-all-btn")
markallbtn.addEventListener("click",function(){
    finishall.click();
})


//for delete
todocontent.addEventListener("click", function (e) {
    if (e.target.closest(".delete")) {
        const todoitem = e.target.closest(".todo-item")
            todoitem.remove();
            updatecount();
            savetodos();
        
       
    }
})


// this is for clear-all button 
let clearall = document.querySelector(".clear-all");
clearall.addEventListener("click", function () {
    const todoitem = document.querySelectorAll(".todo-item");
    if (confirm("do you really want to clear all tasks?")) {
        todoitem.forEach(function (allitem) {
            allitem.remove();
            updatecount();
        })

    }
    savetodos();
})





// for footer/ task counter  
let footer = document.querySelector(".footer")
function updatecount(){
    let  todoitem = document.querySelectorAll(".todo-item");
    let count = todoitem.length;
    footer.textContent =`${count} items remaining`
}
updatecount();
