let bord = document.querySelector(".bord");
let slider = document.getElementById("mySlider");
let rangeValue = document.getElementById("rangeValue");
let resetBtn = document.querySelector(".reset");
let allcells;

// Function to handle cell interactions
function handleCellInteraction(element) {
  if (element.classList.contains("cell")) {
    element.style.backgroundColor = "black";
  }
}

// Function to draw the board
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

// Initial draw
draw(slider.value);

// Event listener for slider input
slider.addEventListener("input", () => {
  let changedValue = slider.value;
  draw(changedValue);
  rangeValue.textContent = changedValue;
});

// Event listeners for mouse and touch interactions
function handleInteractionEvent(event) {
  event.preventDefault();
  let target = document.elementFromPoint(
    event.touches ? event.touches[0].clientX : event.clientX,
    event.touches ? event.touches[0].clientY : event.clientY
  );

  handleCellInteraction(target);
}

bord.addEventListener("mousemove", handleInteractionEvent);
bord.addEventListener("touchmove", handleInteractionEvent);
bord.addEventListener("mouseleave", handleInteractionEvent);
bord.addEventListener("touchend", handleInteractionEvent);

// Reset function
resetBtn.addEventListener("click", () => {
  let defaultValue = (slider.value = 16);
  rangeValue.textContent = defaultValue;
  draw(defaultValue);
});
