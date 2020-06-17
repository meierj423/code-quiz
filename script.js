var timerEl = document.querySelector(".navbar-text");
var startBtn = document.getElementById("start");
var intro = document.querySelector("#main");
var inst = document.getElementById("instructions");
var options = document.getElementById("options");

// consider setAttribute
// options.textContent = "";

inst.textContent =
  "You will be given 60 seconds to answer as many multiple-choice questions on the fundamentals of JavaScript. For every incorrect answer, 10 seconds will be deducted from your time.";

// Question bank
var questionBank = [
    "Red",
    "Blue",
    "Green"
];

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
    main.textContent = "";

    var questionEl = document.createElement("div");
    questionEl.innerHTML = questionBank[0];
    intro.appendChild(questionEl);

    // First multiple choice
    var firstchoiceDiv = document.createElement("div");
    intro.appendChild(firstchoiceDiv);
    var choiceOne = document.createElement("button");
    choiceOne.innerHTML = "Choice one";
    firstchoiceDiv.appendChild(choiceOne);

    // Second multiple choice
    var secondchoiceDiv = document.createElement("div");
    intro.appendChild(secondchoiceDiv);
    var choiceTwo = document.createElement("button");
    choiceTwo.innerHTML = "A string";
    secondchoiceDiv.appendChild(choiceTwo);

    // Third multiple choice
    var thirdchoiceDiv = document.createElement("div");
    intro.appendChild(thirdchoiceDiv);
    var choiceThree = document.createElement("button");
    choiceThree.innerHTML = "Choice three";
    thirdchoiceDiv.appendChild(choiceThree);

    // Fourth multiple choice
    var fourthchoiceDiv = document.createElement("div");
    intro.appendChild(fourthchoiceDiv);
    var choiceFour = document.createElement("button");
    choiceFour.innerHTML = "Choice four";
    fourthchoiceDiv.appendChild(choiceFour);

    startTimer();
  }
});
