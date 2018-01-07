var squares = document.querySelectorAll(".square");
var displayedColor = document.getElementById("findColor");
var message = document.getElementById("message");
var newGame = document.querySelector("button");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var easy = 1;
var hard = 0;

// Set difficulty level to easy
easyBtn.addEventListener("click", function() {
    easy = 1;
    hard = 0;
    reset();
});

// Set difficulty level to hard
hardBtn.addEventListener("click", function() {
    easy = 0;
    hard = 1;
    hardReset();
});

// Start at difficulty level easy on load
reset();

// Begin new game depending on previous difficulty level
newGame.addEventListener("click", function() {
    if(easy === 0) {
        hardReset();
    } else {
        reset();
    }
});


// Reset game to easy
function reset() {
    // Remove button highlight for level hard
    hardBtn.classList.remove("bg-color");
    // Add button highlight for level easy
    easyBtn.classList.add("bg-color");
    // Reset feedback message
    message.textContent = "";
    // Loop through each square
    for(var i = 0; i < squares.length; i++) { 
        // Assign random color to each square
        squares[i].style.backgroundColor = "rgb(" + randomColors() + ", " + randomColors() + ", " + randomColors() + ")";
        // Display the color code to pick from the squares
        displayedColor.textContent = squares[Math.floor(Math.random()*squares.length)].style.backgroundColor;
        // Check to see if the color code from clicked square matches the displayed color code
        squares[i].addEventListener("click", isMatching);
    }; 
}

// Reset game to hard
function hardReset() {
    // Remove button highlight for level easy
    easyBtn.classList.remove("bg-color");
    // Add button highlight for level hard
    hardBtn.classList.add("bg-color");
    // Reset feedback message
    message.textContent = "";
    // Generate initial color code
    var generatedColor = [];
    randomize();
    for(var i = 0; i < squares.length; i++) { 
        // Set the values to change slightly from the inital color code and assign it to each square
        squares[i].style.backgroundColor = "rgb(" + (generatedColor[0]+(i*20)) + ", " + (generatedColor[1]+(i*20)) + ", " + (generatedColor[2]+(i*20)) + ")";
        // Display the color code to pick from the squares
        displayedColor.textContent = squares[Math.floor(Math.random()*squares.length)].style.backgroundColor;
        // Check to see if the color code from clicked square matches the displayed color code
        squares[i].addEventListener("click", isMatching);
    };
    // Randomize the initial color code for each play
    function randomize() {
        for(var r = 0; r < 3; r++) {
            var x = Math.floor(Math.random()*245);
            generatedColor.push(x);
        }
    };
}

// Randomize the color codes for easy level for each play
function randomColors() {
    return Math.floor(Math.random()*256);
}

// Function to check if color code from the picked square matches the displayed code
function isMatching() {
    // When color codes match
    if(this.style.backgroundColor === displayedColor.textContent) {
        for(var i = 0; i < squares.length; i++) {
            // Change all squares to the same color
            squares[i].style.backgroundColor = this.style.backgroundColor;
            // Remove shrink transform class
            squares[i].classList.remove("shrink");
        }
        // Display feedback
        message.textContent = "Correct!"
    } else {
    // When color codes do not match
        // Hide picked square
        this.style.backgroundColor = "transparent";
        // Add shrink transform class
        this.classList.add("shrink");
        // Display feedback
        message.textContent = "Try again!"
    }
};