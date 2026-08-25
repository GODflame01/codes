let turn = "⭕"
let container = document.querySelector(".container");
let boxes = document.querySelectorAll(".box");
let box = document.querySelector(".box")

container.addEventListener("click", function (dets) {
    if (dets.target.classList.contains("box") && dets.target.textContent === "") {
        dets.target.textContent = turn;
        if (turn === "⭕") {
            turn = "❌"
        } else {
            turn = "⭕"
        }

    }



    let winning_pattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]

    ];
 for(pattern of winning_pattern){
    let a = boxes[pattern[0]].textContent;
    let b = boxes[pattern[1]].textContent;
    let c = boxes[pattern[2]].textContent;
    
    if(a!=="" && a===b && b===c){

      alert(`${c} won !!`)
      
        
    }
 }

})

