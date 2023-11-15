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
// Function to handle cell interactions
function handleCellInteraction(element) {
    if (element.classList.contains("cell")) {
      element.style.backgroundColor = "black";
    }
  }
  
  // Use event delegation for mousemove and mouseleave events
  bord.addEventListener("mousemove", (event) => {
    handleCellInteraction(event.target);
  });
  
  bord.addEventListener("touchmove", (event) => {
    // Prevent default to avoid unwanted scrolling on touch devices
    event.preventDefault();
    handleCellInteraction(event.target);
  });
  
  bord.addEventListener("mouseleave", (event) => {
    handleCellInteraction(event.target);
  });
  
  bord.addEventListener("touchend", (event) => {
    handleCellInteraction(event.target);
  });
  
  // reset function
  resetBtn.addEventListener("click", () => {
    let defaultValue = (slider.value = 16);
    rangeValue.textContent = defaultValue;
    draw(defaultValue);
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






