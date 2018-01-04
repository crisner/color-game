var colors = [
    "rgb(255, 167, 38)",
    "rgb(139, 195, 74)",
    "rgb(213, 0, 249)",
    "rgb(191, 54, 12)",
    "rgb(236, 64, 122)",
    "rgb(183, 28, 28)"
];

var squares = document.querySelectorAll(".square");
var displayedColor = document.getElementById("findColor");
var message = document.getElementById("message");
var reset = document.querySelector("button");
var colorKey = Math.floor(Math.random()*colors.length);
console.log(colorKey);

// displayedColor.textContent = colors[1];
// displayedColor.textContent = colors[Math.floor(Math.random()*6)];

for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    displayedColor.textContent = squares[Math.floor(Math.random()*squares.length)].style.backgroundColor;
    squares[i].addEventListener("click", isMatching);
};

// reset.addEventListener("click", function() {
//     for(var i = 0; i < squares.length; i++) {
//         // for(var j = 0; j < squares.length; j++) {
//         //     squares[i].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
//         //     // if (squares[i].style.backgroundColor === squares[j].style.backgroundColor) {
//         //     //     squares[i].style.backgroundColor = colors[(Math.floor(Math.random()*colors.length))-2];
//         //     // } 
//         // }
//         squares[i].style.backgroundColor = colors[i];
//         displayedColor.textContent = squares[Math.floor(Math.random()*squares.length)].style.backgroundColor;
//         // squares[i].addEventListener("click", isMatching);
//     };
// });

function isMatching() {
    // alert("clicked");
    if(this.style.backgroundColor === displayedColor.textContent) {
        // alert("right");
        for(var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = this.style.backgroundColor;
        }
        message.textContent = "Correct!"
    } else {
        // alert("wrong");
        this.style.backgroundColor = "transparent";
        message.textContent = "Try again!"
    }
};