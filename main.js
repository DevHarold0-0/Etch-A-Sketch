const container = document.querySelector("#container");

// Grid
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



// Hover effect
const boxes = document.querySelectorAll(".box")
let timeOut;

boxes.forEach(div => {
    div.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "orange";
        
        // timeOut = setInterval(() => {
        //     event.target.style.backgroundColor = "black";
        // }, 800)

        // console.log("you are in");
    })
})
