const container = document.querySelector(".container");

function createDivs (rows, columns) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-columns", columns);

    for (let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        //cell.innerText = (i + 1);
        container.appendChild(cell).className = "grid-item";

        cell.addEventListener("mouseover",
        e => e.target.classList.add("black-color")
        );       
    }; 
};

createDivs(16, 16);

