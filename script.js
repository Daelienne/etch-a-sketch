 const container = document.querySelector(".container");
 const sizeSelectorButton = document.querySelector(".select-size");
 const blackButton = document.querySelector(".black");
 const rainbowButton = document.querySelector(".rainbow");
 const eraserButton = document.querySelector(".eraser");
 const clearButton = document.querySelector(".clear");

//  let color = "black";

 sizeSelectorButton.addEventListener("click",() => {
    let size = getUserInputSize();
    createDivs(size);
 });

//  blackButton.addEventListener("click", () => {
    
//  });

 function createDivs(size) {

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "cell";

        cell.addEventListener("mouseover",
         e => e.target.classList.add("black-color")
        );
    }
 } 
 createDivs(16);
 
 function getUserInputSize() {

    let userInput = prompt("Enter a size value between 1 and 100.");
    let message = document.querySelector(".message");

    if ( userInput > 0 && userInput <= 100) {
        message.textContent = "Size board changed."
        return userInput;
    } else if (userInput <= 0 || userInput > 100) {
        message.textContent = "Please, enter a value between 1 and 100.";
    } else {
        message.textContent = "Please, enter a number."
    }
 }

//  function colorDiv() {
//     if(color == "rainbow") {
//         this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
//     } else {
//         this.style.backgroundColor = "black";
//     }
//  }


 
