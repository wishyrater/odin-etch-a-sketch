const container = document.querySelector(".container");

function makeGrid(gridSize) {
    container.innerHTML = '';
    const squareSize = `calc(100% / ${gridSize})`;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");   
            square.classList.add("square");
            square.style.width = squareSize;
            square.style.height = squareSize;
            container.appendChild(square);
        }
    }
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => square.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("square")){
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            const rgb = `rgb(${r},${g},${b})`;
    
            e.target.style.backgroundColor = rgb;
        }
    }))
}

function getNewGridSize() {
    let input;
    do {
        input = prompt("Input new grid size (0-100):");
        input = Number(input);
    } while (input > 100 || input < 0 || isNaN(input));
    return input;
}

document.addEventListener("DOMContentLoaded", makeGrid(16));

const button = document.querySelector(".btn");

button.addEventListener("click", function() {
   let newGridSize = getNewGridSize();
   makeGrid(newGridSize);
})