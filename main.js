const container = document.querySelector("#container");

const column = document.createElement("div");
column.setAttribute("id", "column");
container.appendChild(column);


const row = document.createElement("div");
row.setAttribute("id", "row");
container.appendChild(row);



for (let i = 0; i < 16; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    
    column.appendChild(box);
}

for (let i = 0; i < 15; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    
    row.appendChild(box);
}



