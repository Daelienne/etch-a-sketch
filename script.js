 const container = document.querySelector(".container");
 const sizeSelectorButton = document.querySelector(".select-size");
 const blackButton = document.querySelector(".black");
 const rainbowButton = document.querySelector(".rainbow");
 const eraserButton = document.querySelector(".eraser");
 const clearButton = document.querySelector(".clear");

let color = "black";

 sizeSelectorButton.addEventListener("click",() => {
    let size = getUserInputSize();
    clearAllDivs();
    createDivs(size);
 });

//Create divs and adds and event listener mouseover to each of them
 function createDivs(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < (size * size); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "cell";
        cell.addEventListener("mouseover", colorDivs);
    };
 };
 
//Ask the user for the desired size for the board
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
    };
 };

//Get user color's choice
function getColorChoice(colorChoice) {
    color = colorChoice;
  };

//Colors divs according to user's choice
  function colorDivs() {
   
   if (color == "rainbow") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
   } else if (color == "white") {
      this.style.backgroundColor = "white";
   } else {
      this.style.backgroundColor = "black";
   };
   
  };

//Clear the board
function clearAllDivs(){
    let cell = document.querySelectorAll(".cell");
    cell.forEach((div)=> div.style.backgroundColor = "white");
}

createDivs(16);

 
