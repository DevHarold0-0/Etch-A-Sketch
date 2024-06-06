const container = document.querySelector("#container");

// Grid
function grid() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.setAttribute("id", "row");
        container.appendChild(row);
    
        for (let k = 0; k < 16; k++) {
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
    }
}
grid();




// Hover effect
function hover() {
    const boxes = document.querySelectorAll(".box")
    // let timeOut;

    boxes.forEach(div => {
        div.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "orange";
        
            // timeOut = setInterval(() => {
            //     event.target.style.backgroundColor = "black";
            // }, 800)

            // console.log("you are in");
        })
    })
}
hover();




//Reset 
let userInput;
function newGrid() {

    //clearing default 16 X 16 grid
    const rowClear = document.querySelectorAll("#row");
        rowClear.forEach(rowClear => {
        rowClear.remove();
    })


    //Updating grid
    userInput = prompt("Number of squares per side? Limit is 100.", "16");
    while (userInput > 100 || userInput <= 0) {
        userInput = prompt("Try again, invalid number.");
    }

    for (let i = 0; i < userInput; i++) {
        const row = document.createElement("div");
        row.setAttribute("id", "row");
        container.appendChild(row);
        
    
        for (let k = 0; k < userInput; k++) {
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
    }
}




//New grid button
const btn = document.querySelector("button");
btn.textContent = "Square";
btn.setAttribute("id", "generateNewGrid");

btn.addEventListener("click", (event) => {
    event.target.btn;
    newGrid();
    hover();
    console.log("Prompt is generated")
})



