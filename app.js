let bord = document.querySelector(".bord")

let slider = document.getElementById("mySlider")

let rangeValue = document.getElementById("rangeValue")


let allRows = document.querySelectorAll(".row")


let resetBtn = document.querySelector(".reset")


let allcells = document.querySelectorAll(".cell")




//drawing the sliderValue

function draw(sliderValue){

    bord.innerHTML = ""

   for(let i = 0 ; i < sliderValue; i++){

    let row = document.createElement("div")

    row.classList.add("row")

    for(let j = 0 ; j < sliderValue ; j++){

        let cell = document.createElement("div")
        cell.classList.add("cell")
        row.appendChild(cell)
    }
    bord.appendChild(row)

   }
   allcells = document.querySelectorAll(".cell");
}

draw(slider.value)


slider.addEventListener(
    "input" , ()=>{

        // work this when the slider is moved 

        let changedValue = slider.value

        draw(changedValue)
    }
)



// default mouse move  function

let isMouseDown = false;

// Update the mousedown and mouseup event listeners
bord.addEventListener("mousedown", () => {
  isMouseDown = true;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

// Update the mousemove event listener to check for isMouseDown
bord.addEventListener("mousemove", (event) => {
  if (isMouseDown && event.target.classList.contains("cell")) {
    // Use getRandomColor to set the background color
    event.target.style.backgroundColor = "black";
  }
});

// Reset isMouseDown when the mouse leaves the board
bord.addEventListener("mouseleave", () => {
  isMouseDown = false;
});



// touch support 

// Add touch event listeners
bord.addEventListener("touchstart", (event) => {
    isMouseDown = true;
  });
  
  document.addEventListener("touchend", (event) => {
    isMouseDown = false;
  });
  
  bord.addEventListener("touchmove", (event) => {
    if (isMouseDown && event.target.classList.contains("cell")) {
      event.target.style.backgroundColor = "black";
    }
  });
  


// last 


//reset function 

resetBtn.addEventListener(
    "click" , ()=>{
       let defaultVlue =  slider.value = 16
       rangeValue.textContent = defaultVlue
        draw(defaultVlue)

        
    }
)

