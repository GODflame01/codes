let turn = "⭕"
let container = document.querySelector(".container");
let boxes = document.querySelectorAll(".box");
let h3 = document.querySelector("h3")

console.log(boxes)
function checkdraw() {
    let allfilled = [...boxes].every(function (box) {
        return box.textContent !== "";
    })
    if (allfilled) {
        h3.textContent = `draw !!`
    }
}
function rules() {

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
    for (let pattern of winning_pattern) {
        let a = boxes[pattern[0]].textContent;
        let b = boxes[pattern[1]].textContent;
        let c = boxes[pattern[2]].textContent;



        if (a !== "" && a === b && b === c) {

            winningline(pattern);
            h3.textContent = `${c} won`

        } else {
            checkdraw();

        }

    }

};

container.addEventListener("click", function (dets) {
    if (dets.target.classList.contains("box") && dets.target.textContent === "") {
        dets.target.textContent = turn;
        if (turn === "⭕") {
            turn = "❌"
        } else {
            turn = "⭕"
        }

    }
    rules();


});



let btn = document.querySelector(".resetbtn");
btn.addEventListener("click", function () {
    boxes.forEach(function (box) {
        const line = document.querySelector(".line")
        const h3 = document.querySelector("h3")
        box.textContent = "";
        line.style.display = "none";
        h3.textContent = "";
    })
    turn = "⭕";
});




function winningline(pattern) {
    let line = document.querySelector(".line");
    line.style.display = "block";

    if (pattern[0] === 0 && pattern[1] === 1 && pattern[2] === 2) {
        line.style.top = "24.5%"
        line.style.transform = "rotate(0deg)";
    }
    if (pattern[0] === 3 && pattern[1] === 4 && pattern[2] === 5) {
        line.style.bottom = "22.5%"
        line.style.transform = "rotate(0deg)";
    }
    if (pattern[0] === 6 && pattern[1] === 7 && pattern[2] === 8) {
        line.style.bottom = "-28%"
        line.style.transform = "rotate(0deg)";
    }



    if (pattern[0] === 0 && pattern[1] === 3 && pattern[2] === 6) {
        line.style.transform = "rotate(90deg)"
        line.style.right = "30%"
        line.style.bottom = "30%"

    }
    if (pattern[0] === 1 && pattern[1] === 4 && pattern[2] === 7) {
        line.style.transform = "rotate(90deg)"
        line.style.right = "0%"
        line.style.bottom = "30%"

    }
    if (pattern[0] === 2 && pattern[1] === 5 && pattern[2] === 8) {
        line.style.transform = "rotate(90deg)"
        line.style.left = "30%"
        line.style.bottom = "30%"

    }



    if (pattern[0] === 0 && pattern[1] === 4 && pattern[2] === 8) {
        line.style.transform = "rotate(40deg)"
        line.style.left = "4%"
        line.style.top = "81%"

    }
    if (pattern[0] === 2 && pattern[1] === 4 && pattern[2] === 6) {
        line.style.transform = "rotate(-40deg)"
        line.style.right = "4%"
        line.style.top = "81%"

    }
}