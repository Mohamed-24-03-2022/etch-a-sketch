const gridContainer = document.querySelector(".grid-container");
const slider = document.querySelector("#range-slider");
const outputValue = document.querySelector(".output-value");
const resetButton = document.querySelector(".reset");
const blackBtn = document.querySelector(".black");
const colorPicker = document.querySelector("#color-picker");
const rgbBtn = document.querySelector(".rgb");
const gradBtn = document.querySelector(".grad");
let color = "";

// showing initial slider value in the paragraph
outputValue.textContent = `${slider.value} x ${slider.value}`;

// remove grid elements
const removeGridElement = () => {
    const gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach((element) => {
        gridContainer.removeChild(element);
    });
};

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
const createGrid = (width = "31.88") => {
    for (let i = 0; i < slider.value ** 2; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-element");
        newDiv.style.width = `${width}px`;
        gridContainer.appendChild(newDiv);
    }
};
createGrid();

// Reset grid elements background color
const resetGridColor = () => {
    const gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach((element) => {
        element.style.backgroundColor = "inherit";
    });
};
resetButton.addEventListener("click", resetGridColor);


// buttons listener
const addMouseEvent = (color) => {
    const gridElements = document.querySelectorAll(".grid-element");
    for (const element of gridElements) {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = color;
        });
    }
}
blackBtn.addEventListener("click", () => {
    resetGridColor();
    addMouseEvent("black");
});
colorPicker.addEventListener("click", () => {
    resetGridColor();
    addMouseEvent(colorPicker.value);
});

rgbBtn.addEventListener("click", () => {
    resetGridColor();
    const gridElements = document.querySelectorAll(".grid-element");
    for (const element of gridElements) {
        element.addEventListener("mouseover", () => {
            const hue = Math.floor(Math.random() * 360);
            element.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        });
    }
});

gradBtn.addEventListener("click", () => {
    resetGridColor();
    const gridElements = document.querySelectorAll(".grid-element");
    let darker = 100;
    for (const element of gridElements) {
        element.addEventListener("mouseover", () => {
            const hue = Math.floor(Math.random() * 360);
            darker -= 2;
            element.style.backgroundColor = `hsl(${hue}, 100%, ${darker}%)`;
        });
    }
});
