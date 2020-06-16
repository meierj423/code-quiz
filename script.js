var timerEl = document.querySelector(".navbar-text");
var startBtn = document.getElementById("start");
var intro = document.querySelector("#main");
// timerEl.textContent = "Time: "

// might have to change function name later 
function startTimer() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + " seconds remaining";
        timeLeft--;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "Time's Up!";
        }
    }, 1000);
}

startBtn.addEventListener("click", function () {

    if (event.target.matches("button")) {
        intro.textContent = "";
        startTimer();
    }
});
