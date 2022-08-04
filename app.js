let colors = ["aqua", "purple", "chocolate", "crimson", "deeppink", "green", "yellow"];

for (var i = 0; i < 35; i++) {
    var balloon = document.getElementById(`balloon-${i}`);
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}
var findColor = colors[Math.floor(Math.random() * colors.length)];

function findBalloon(balloon) {
    console.log("helllooooo");
    var balloon = document.getElementById(balloon);
    console.log("00000")
    console.log("balloon", balloon.style.backgroundColor);

    var balloon = document.getElementById(balloon);
    if (findColor = balloon.style.backgroundColor) {
        console.log("00000");
    }
}
