const gridContainer = document.querySelector(".grid-container");
const slider = document.querySelector("#range-slider");
const outputValue = document.querySelector(".output-value");
const resetButton = document.querySelector(".reset");
outputValue.textContent = slider.value;

const removeGridElement = () => {
    const gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach((gridElement) => {
        gridContainer.removeChild(gridElement);
    });
};

// range slider
slider.addEventListener("input", () => {
    outputValue.textContent = slider.value;
    removeGridElement();
    createGrid();
});



const SetElementsWidth = () => {
    const num = Math.sqrt((510 * 510) / (slider.value ** 2))
    const width = Math.floor(num);
    const gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach(element => {
        element.style.width = `${num}px`
    });
};

const createGrid = () => {
    for (let i = 0; i <= (slider.value ** 2); i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-element");

        SetElementsWidth();

        gridContainer.appendChild(newDiv);
        newDiv.addEventListener("mouseover", () => {
            (newDiv.style.backgroundColor = "black");
        });
    }
};
createGrid();

const resetGridColor = () => {
    const gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach((gridElement) => {
        gridElement.style.backgroundColor = "inherit";
    });
};
// Reset grid elements background color
resetButton.addEventListener("click", resetGridColor);
