document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const button = document.querySelector(".btn");

    function getRandomColor() {
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        return `rgb(${r},${g},${b})`;
    }

    function makeGrid(gridSize) {
        container.innerHTML = ''; // clear the existing grid
        const squareSize = `calc(100% / ${gridSize})`;

        for (let i = 0; i < gridSize * gridSize; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = squareSize;
            square.style.height = squareSize;
            container.appendChild(square);
        }
    }

    function getNewGridSize() {
        let gridSize;
        do {
            const input = prompt("Input new grid size (1-100):");
            gridSize = Number(input);
        } while (gridSize > 100 || gridSize < 1 || isNaN(gridSize));
        return gridSize;
    }

    container.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("square")) {
            e.target.style.backgroundColor = getRandomColor();
        }
    });

    makeGrid(16);

    button.addEventListener("click", () => {
        const newGridSize = getNewGridSize();
        makeGrid(newGridSize);
    });
});
