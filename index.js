const gridContainer = document.querySelector(".grid-container");
const slider = document.querySelector("#range-slider");
const outputValue = document.querySelector(".output-value");
const resetButton = document.querySelector(".reset");
const blackBtn = document.querySelector(".black");
const redBtn = document.querySelector(".red");
const blueBtn = document.querySelector(".blue");
const colorPicker = document.querySelector("#color-picker");
const rgbBtn = document.querySelector(".rgb");
let color = '';


// showing initial slider value in the paragraph
outputValue.textContent = `${slider.value} x ${slider.value}`;

const removeGridElement = () => {
    const gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach((element) => {
        gridContainer.removeChild(element);
    });
}
// showing Dynamic slider value in the paragraph
// Creating grid element width relative to grid container
// 510 is the width and height of the grid container
// removing and creating (updating) new grid elements
slider.addEventListener("input", () => {
    outputValue.textContent = `${slider.value} x ${slider.value}`;
    const elementWidth = Math.sqrt((510 * 510) / slider.value ** 2);
    removeGridElement();
    createGrid(elementWidth);
});

// first executed when loading the page
const createGrid = (width = '31.88') => {
    for (let i = 0; i < slider.value ** 2; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-element");
        newDiv.style.width = `${width}px`;
        gridContainer.appendChild(newDiv);
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = color;
        });
    }
}
createGrid();


// Reset grid elements background color
const resetGridColor = () => {
    const gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach((element) => {
        element.style.backgroundColor = "inherit";
    });
}
resetButton.addEventListener("click", resetGridColor);

blackBtn.addEventListener("click", () => {
    resetGridColor();
    color = "hsl(0, 100%, 1%)";
});

redBtn.addEventListener("click", () => {
    resetGridColor();
    color = "hsl(351, 100%, 50%)";
});

blueBtn.addEventListener("click", () => {
    resetGridColor();
    color = "hsl(241, 100%, 50%)";
});


colorPicker.addEventListener("click", () => {
    resetGridColor();
    color = colorPicker.value;
});
