// select the name input element
var nameInput = document.getElementById("name-input"); 
console.log(nameInput);

// select the name output element
var nameOutput = document.querySelector("#name-output");
console.log(nameOutput);

// if the user changes the value of the input
nameInput.addEventListener("input", function() {
// update the output with that value
    nameOutput.textContent = nameInput.value;
});

// select the button element from the page
var animateButton = document.getElementById("animate");

// select the dropdown input from the page 
var animateInput = document.getElementById("animation-select");

// select the div to animate
var animateOutput = document.querySelector(".animated");

// on click
animateButton.addEventListener("click", function() {
// add the dropdown input value to the animate element
animateOutput.classList.add(animateInput.value);    

// remove the dropdown input value from the animate element
animateOutput.addEventListener("animationend", function() {
    animateOutput.classList.remove(animateInput.value);    
    
});

});

