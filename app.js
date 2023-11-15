let bord = document.querySelector(".bord");
let slider = document.getElementById("mySlider");
let rangeValue = document.getElementById("rangeValue");
let resetBtn = document.querySelector(".reset");
let rainbowBtn = document.querySelector(".ranbow");
let eraserBtn = document.querySelector(".eraser");
let massage = document.querySelector("h2");

let colors = document.querySelector(".color-pick");
let colorPicker = document.querySelector("#colorPicker"); // Added color picker input
let allcells;

const predefinedColors = [
  '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'
];

let currentMode = "black"; // Added variable to track current mode

function changeColor() {
  return predefinedColors[Math.floor(Math.random() * predefinedColors.length)];
}

function draw(sliderValue) {
  bord.innerHTML = "";
  for (let i = 0; i < sliderValue; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < sliderValue; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    }
    bord.appendChild(row);
  }
  allcells = document.querySelectorAll(".cell");
}

draw(slider.value);

slider.addEventListener("input", () => {
  let changedValue = slider.value;
  draw(changedValue);
  rangeValue.textContent = changedValue;
});

function handleCellInteraction(element, color) {
  if (element.classList.contains("cell")) {
    element.style.backgroundColor = color;
  }
}

function handleCellInteractionRandom(element) {
  if (element.classList.contains("cell")) {
    if (currentMode === "black") {
      element.style.backgroundColor = "black";
    } else if (currentMode === "random") {
      element.style.backgroundColor = changeColor();
    } else if (currentMode === "eraser") {
      element.style.backgroundColor = "lightgray";
    } else if (currentMode === "color-picker") {
      // Use the selected color from the color picker
      element.style.backgroundColor = colorPicker.value;
    }
  }
}

rainbowBtn.addEventListener("click", () => {
  // If eraser mode or color-picker mode is active, set the mode to "black"
  if (currentMode === "eraser" || currentMode === "color-picker") {
    currentMode = "black";
  } else {
    // Toggle between "black" and "random" modes
    currentMode = currentMode === "black" ? "random" : "black";
  }
});

eraserBtn.addEventListener("click", () => {
  // Set the mode to "eraser"
  currentMode = "eraser";
  massage.style.display = "inline";
});

colors.addEventListener("click", () => {
  // Set the mode to "color-picker"
  currentMode = "color-picker";
  massage.style.display = "inline";
});

bord.addEventListener("mousemove", (event) => {
  handleCellInteractionRandom(event.target);
});

bord.addEventListener("touchmove", (event) => {
  event.preventDefault();
  handleCellInteractionRandom(event.target);
});

bord.addEventListener("mouseleave", (event) => {
  handleCellInteractionRandom(event.target);
});

bord.addEventListener("touchend", (event) => {
  handleCellInteractionRandom(event.target);
});

resetBtn.addEventListener("click", () => {
  let defaultValue = (slider.value = 16);
  rangeValue.textContent = defaultValue;
  draw(defaultValue);

  // Reset the mode to "black" when resetting the board
  currentMode = "black";
});
