var timerEl = document.querySelector(".navbar-text");
var startBtn = document.getElementById("start");
var intro = document.querySelector("#main");
var inst = document.getElementById("instructions");
var options = document.getElementById("options");

// consider setAttribute
// options.textContent = "";

inst.textContent =
  "You will be given 60 seconds to answer as many multiple-choice questions on the fundamentals of JavaScript. For every incorrect answer, 10 seconds will be deducted from your time.";

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
    var score = 0;

    // FIRST QUESTION
    var questionEl = document.createElement("div");
    questionEl.innerHTML =
      "Inside which HTML element do we put the JavaScript?";
    intro.appendChild(questionEl);

    // First multiple choice
    var firstchoiceDiv = document.createElement("div");
    intro.appendChild(firstchoiceDiv);
    var choiceOne = document.createElement("button");
    choiceOne.innerHTML = "javascript";
    firstchoiceDiv.appendChild(choiceOne);

    // Second multiple choice
    var secondchoiceDiv = document.createElement("div");
    intro.appendChild(secondchoiceDiv);
    var choiceTwo = document.createElement("button");
    choiceTwo.innerHTML = "scripting";
    secondchoiceDiv.appendChild(choiceTwo);

    // Third multiple choice
    var thirdchoiceDiv = document.createElement("div");
    intro.appendChild(thirdchoiceDiv);
    var choiceThree = document.createElement("button");
    choiceThree.innerHTML = "script";
    thirdchoiceDiv.appendChild(choiceThree);

    // Fourth multiple choice
    var fourthchoiceDiv = document.createElement("div");
    intro.appendChild(fourthchoiceDiv);
    var choiceFour = document.createElement("button");
    choiceFour.innerHTML = "js";
    fourthchoiceDiv.appendChild(choiceFour);

    // Outcomes

    choiceOne.addEventListener("click", function () {
      if (event.target.matches("button")) {
        alert("Wrong!!");
        score--;
        // timeLeft - 10;
      }
    });
    choiceTwo.addEventListener("click", function () {
      if (event.target.matches("button")) {
        alert("Wrong!!");
        score--;
      }
    });
    choiceThree.addEventListener("click", function () {
      if (event.target.matches("button")) {
        alert("Correct!");
        score++;
        main.innerHTML = "";

        // SECOND QUESTION
        var questionEl = document.createElement("div");
        questionEl.innerHTML =
          "Where is the correct place to insert a JavaScript?";
        intro.appendChild(questionEl);

        // First multiple choice
        var firstchoiceDiv = document.createElement("div");
        intro.appendChild(firstchoiceDiv);
        var choiceOne = document.createElement("button");
        choiceOne.innerHTML = "The body section";
        firstchoiceDiv.appendChild(choiceOne);

        // Second multiple choice
        var secondchoiceDiv = document.createElement("div");
        intro.appendChild(secondchoiceDiv);
        var choiceTwo = document.createElement("button");
        choiceTwo.innerHTML = "The head section";
        secondchoiceDiv.appendChild(choiceTwo);

        // Third multiple choice
        var thirdchoiceDiv = document.createElement("div");
        intro.appendChild(thirdchoiceDiv);
        var choiceThree = document.createElement("button");
        choiceThree.innerHTML = "Both the head and the body section";
        thirdchoiceDiv.appendChild(choiceThree);

        // Outcomes

        choiceOne.addEventListener("click", function () {
          if (event.target.matches("button")) {
            alert("Wrong!!");
            score--;
            // timeLeft - 10;
          }
        });
        choiceTwo.addEventListener("click", function () {
          if (event.target.matches("button")) {
            alert("Wrong!!");
            score--;
          }
        });
        choiceThree.addEventListener("click", function () {
          if (event.target.matches("button")) {
            alert("Correct!");
            score++;
            main.innerHTML = "";

            // THIRD QUESTION
            var questionEl = document.createElement("div");
            questionEl.innerHTML =
              'What is the correct syntax for referring to an external script called "xxx.js"';
            intro.appendChild(questionEl);

            // First multiple choice
            var firstchoiceDiv = document.createElement("div");
            intro.appendChild(firstchoiceDiv);
            var choiceOne = document.createElement("button");
            choiceOne.innerHTML = 'script="xxx.js"';
            firstchoiceDiv.appendChild(choiceOne);

            // Second multiple choice
            var secondchoiceDiv = document.createElement("div");
            intro.appendChild(secondchoiceDiv);
            var choiceTwo = document.createElement("button");
            choiceTwo.innerHTML = 'script name="xxx.js"';
            secondchoiceDiv.appendChild(choiceTwo);

            // Third multiple choice
            var thirdchoiceDiv = document.createElement("div");
            intro.appendChild(thirdchoiceDiv);
            var choiceThree = document.createElement("button");
            choiceThree.innerHTML = 'script href="xxx.js"';
            thirdchoiceDiv.appendChild(choiceThree);

            // Outcomes

            choiceOne.addEventListener("click", function () {
              if (event.target.matches("button")) {
                alert("Correct!!");
                score++;
                main.innerHTML = "";

                // FOURTH QUESTION
                var questionEl = document.createElement("div");
                questionEl.innerHTML =
                  "The external JavaScript file must contain the script tag.";
                intro.appendChild(questionEl);

                // First multiple choice
                var firstchoiceDiv = document.createElement("div");
                intro.appendChild(firstchoiceDiv);
                var choiceOne = document.createElement("button");
                choiceOne.innerHTML = "True";
                firstchoiceDiv.appendChild(choiceOne);

                // Second multiple choice
                var secondchoiceDiv = document.createElement("div");
                intro.appendChild(secondchoiceDiv);
                var choiceTwo = document.createElement("button");
                choiceTwo.innerHTML = "False";
                secondchoiceDiv.appendChild(choiceTwo);

                // Outcomes

                choiceOne.addEventListener("click", function () {
                  if (event.target.matches("button")) {
                    alert("Wrong!!");
                    score--;
                    // timeLeft - 10;
                  }
                });
                choiceTwo.addEventListener("click", function () {
                  if (event.target.matches("button")) {
                    alert("Correct!");
                    score++;
                    main.innerHTML = "";

                    // FIFTH QUESTION
                    var questionEl = document.createElement("div");
                    questionEl.innerHTML =
                      'How do you write "Hello World" in an alert box?';
                    intro.appendChild(questionEl);

                    // First multiple choice
                    var firstchoiceDiv = document.createElement("div");
                    intro.appendChild(firstchoiceDiv);
                    var choiceOne = document.createElement("button");
                    choiceOne.innerHTML = 'alert("Hello World")';
                    firstchoiceDiv.appendChild(choiceOne);

                    // Second multiple choice
                    var secondchoiceDiv = document.createElement("div");
                    intro.appendChild(secondchoiceDiv);
                    var choiceTwo = document.createElement("button");
                    choiceTwo.innerHTML = 'msgBox("Hello World")';
                    secondchoiceDiv.appendChild(choiceTwo);

                    // Third multiple choice
                    var thirdchoiceDiv = document.createElement("div");
                    intro.appendChild(thirdchoiceDiv);
                    var choiceThree = document.createElement("button");
                    choiceThree.innerHTML = 'alertBox("Hello World")';
                    thirdchoiceDiv.appendChild(choiceThree);

                    // Fourth multiple choice
                    var fourthchoiceDiv = document.createElement("div");
                    intro.appendChild(fourthchoiceDiv);
                    var choiceFour = document.createElement("button");
                    choiceFour.innerHTML = 'msg("Hello World")';
                    fourthchoiceDiv.appendChild(choiceFour);

                    // Outcomes

                    choiceOne.addEventListener("click", function () {
                      if (event.target.matches("button")) {
                        alert("Correct!");
                        score++;
                        main.innerHTML = "";

                        // SIXTH QUESTION
                        var questionEl = document.createElement("div");
                        questionEl.innerHTML =
                          "How do you create a function in JavaScript?";
                        intro.appendChild(questionEl);

                        // First multiple choice
                        var firstchoiceDiv = document.createElement("div");
                        intro.appendChild(firstchoiceDiv);
                        var choiceOne = document.createElement("button");
                        choiceOne.innerHTML = "function myFunction()";
                        firstchoiceDiv.appendChild(choiceOne);

                        // Second multiple choice
                        var secondchoiceDiv = document.createElement("div");
                        intro.appendChild(secondchoiceDiv);
                        var choiceTwo = document.createElement("button");
                        choiceTwo.innerHTML = "function = myFunction()";
                        secondchoiceDiv.appendChild(choiceTwo);

                        // Third multiple choice
                        var thirdchoiceDiv = document.createElement("div");
                        intro.appendChild(thirdchoiceDiv);
                        var choiceThree = document.createElement("button");
                        choiceThree.innerHTML = "function:myFunction()";
                        thirdchoiceDiv.appendChild(choiceThree);

                        // Outcomes

                        choiceOne.addEventListener("click", function () {
                          if (event.target.matches("button")) {
                            alert("Correct!");
                            score++;
                            main.innerHTML = "";

                            // SEVENTH QUESTION
                            var questionEl = document.createElement("div");
                            questionEl.innerHTML =
                              'How do you call a function named "myFunction"?';
                            intro.appendChild(questionEl);

                            // First multiple choice
                            var firstchoiceDiv = document.createElement("div");
                            intro.appendChild(firstchoiceDiv);
                            var choiceOne = document.createElement("button");
                            choiceOne.innerHTML = "call myFunction()";
                            firstchoiceDiv.appendChild(choiceOne);

                            // Second multiple choice
                            var secondchoiceDiv = document.createElement("div");
                            intro.appendChild(secondchoiceDiv);
                            var choiceTwo = document.createElement("button");
                            choiceTwo.innerHTML = "call function myFunction()";
                            secondchoiceDiv.appendChild(choiceTwo);

                            // Third multiple choice
                            var thirdchoiceDiv = document.createElement("div");
                            intro.appendChild(thirdchoiceDiv);
                            var choiceThree = document.createElement("button");
                            choiceThree.innerHTML = "myFunction()";
                            thirdchoiceDiv.appendChild(choiceThree);

                            // Outcomes

                            choiceOne.addEventListener("click", function () {
                              if (event.target.matches("button")) {
                                alert("Wrong!!");
                                score--;
                                // timeLeft - 10;
                              }
                            });
                            choiceTwo.addEventListener("click", function () {
                              if (event.target.matches("button")) {
                                alert("Wrong!!");
                                score--;
                              }
                            });
                            choiceThree.addEventListener("click", function () {
                              if (event.target.matches("button")) {
                                alert("Correct!");
                                score++;
                                main.innerHTML = "";

                                // EIGTH QUESTION
                                var questionEl = document.createElement("div");
                                questionEl.innerHTML =
                                  "How to write an IF statement in JavaScript?";
                                intro.appendChild(questionEl);

                                // First multiple choice
                                var firstchoiceDiv = document.createElement(
                                  "div"
                                );
                                intro.appendChild(firstchoiceDiv);
                                var choiceOne = document.createElement(
                                  "button"
                                );
                                choiceOne.innerHTML = "if i = 5";
                                firstchoiceDiv.appendChild(choiceOne);

                                // Second multiple choice
                                var secondchoiceDiv = document.createElement(
                                  "div"
                                );
                                intro.appendChild(secondchoiceDiv);
                                var choiceTwo = document.createElement(
                                  "button"
                                );
                                choiceTwo.innerHTML = "if (i == 5)";
                                secondchoiceDiv.appendChild(choiceTwo);

                                // Third multiple choice
                                var thirdchoiceDiv = document.createElement(
                                  "div"
                                );
                                intro.appendChild(thirdchoiceDiv);
                                var choiceThree = document.createElement(
                                  "button"
                                );
                                choiceThree.innerHTML = "if i == 5 then";
                                thirdchoiceDiv.appendChild(choiceThree);

                                // Fourth multiple choice
                                var fourthchoiceDiv = document.createElement(
                                  "div"
                                );
                                intro.appendChild(fourthchoiceDiv);
                                var choiceFour = document.createElement(
                                  "button"
                                );
                                choiceFour.innerHTML = "if i = 5 then";
                                fourthchoiceDiv.appendChild(choiceFour);

                                // Outcomes

                                choiceOne.addEventListener(
                                  "click",
                                  function () {
                                    if (event.target.matches("button")) {
                                      alert("Wrong!!");
                                      score--;
                                      // timeLeft - 10;
                                    }
                                  }
                                );
                                choiceTwo.addEventListener(
                                  "click",
                                  function () {
                                    if (event.target.matches("button")) {
                                      alert("Correct!");
                                      score++;
                                      main.innerHTML = "";

                                      // NINTH QUESTION
                                      var questionEl = document.createElement(
                                        "div"
                                      );
                                      questionEl.innerHTML =
                                        'How to write an IF statement for executing some code if "i" is NOT equal to 5?';
                                      intro.appendChild(questionEl);

                                      // First multiple choice
                                      var firstchoiceDiv = document.createElement(
                                        "div"
                                      );
                                      intro.appendChild(firstchoiceDiv);
                                      var choiceOne = document.createElement(
                                        "button"
                                      );
                                      choiceOne.innerHTML = "if i <> 5";
                                      firstchoiceDiv.appendChild(choiceOne);

                                      // Second multiple choice
                                      var secondchoiceDiv = document.createElement(
                                        "div"
                                      );
                                      intro.appendChild(secondchoiceDiv);
                                      var choiceTwo = document.createElement(
                                        "button"
                                      );
                                      choiceTwo.innerHTML = "if (i <> 5)";
                                      secondchoiceDiv.appendChild(choiceTwo);

                                      // Third multiple choice
                                      var thirdchoiceDiv = document.createElement(
                                        "div"
                                      );
                                      intro.appendChild(thirdchoiceDiv);
                                      var choiceThree = document.createElement(
                                        "button"
                                      );
                                      choiceThree.innerHTML = "if (i != 5)";
                                      thirdchoiceDiv.appendChild(choiceThree);

                                      // Fourth multiple choice
                                      var fourthchoiceDiv = document.createElement(
                                        "div"
                                      );
                                      intro.appendChild(fourthchoiceDiv);
                                      var choiceFour = document.createElement(
                                        "button"
                                      );
                                      choiceFour.innerHTML = "if i =! 5 then";
                                      fourthchoiceDiv.appendChild(choiceFour);

                                      // Outcomes

                                      choiceOne.addEventListener(
                                        "click",
                                        function () {
                                          if (event.target.matches("button")) {
                                            alert("Wrong!!");
                                            score--;
                                            // timeLeft - 10;
                                          }
                                        }
                                      );
                                      choiceTwo.addEventListener(
                                        "click",
                                        function () {
                                          if (event.target.matches("button")) {
                                            alert("Wrong!!");
                                            score--;
                                          }
                                        }
                                      );
                                      choiceThree.addEventListener(
                                        "click",
                                        function () {
                                          if (event.target.matches("button")) {
                                            alert("Correct!");
                                            score++;
                                            main.innerHTML = "";

                                            // TENTH QUESTION
                                            var questionEl = document.createElement(
                                              "div"
                                            );
                                            questionEl.innerHTML =
                                              "How does a WHILE loop start?";
                                            intro.appendChild(questionEl);

                                            // First multiple choice
                                            var firstchoiceDiv = document.createElement(
                                              "div"
                                            );
                                            intro.appendChild(firstchoiceDiv);
                                            var choiceOne = document.createElement(
                                              "button"
                                            );
                                            choiceOne.innerHTML = "while (i <= 10; i++)";
                                            firstchoiceDiv.appendChild(
                                              choiceOne
                                            );

                                            // Second multiple choice
                                            var secondchoiceDiv = document.createElement(
                                              "div"
                                            );
                                            intro.appendChild(secondchoiceDiv);
                                            var choiceTwo = document.createElement(
                                              "button"
                                            );
                                            choiceTwo.innerHTML = "while i = 1 to 10";
                                            secondchoiceDiv.appendChild(
                                              choiceTwo
                                            );

                                            // Third multiple choice
                                            var thirdchoiceDiv = document.createElement(
                                              "div"
                                            );
                                            intro.appendChild(thirdchoiceDiv);
                                            var choiceThree = document.createElement(
                                              "button"
                                            );
                                            choiceThree.innerHTML = "while (i <= 10)";
                                            thirdchoiceDiv.appendChild(
                                              choiceThree
                                            );

                                            // Outcomes

                                            choiceOne.addEventListener(
                                              "click",
                                              function () {
                                                if (
                                                  event.target.matches("button")
                                                ) {
                                                  alert("Wrong!!");
                                                  score--;
                                                  // timeLeft - 10;
                                                }
                                              }
                                            );
                                            choiceTwo.addEventListener(
                                              "click",
                                              function () {
                                                if (
                                                  event.target.matches("button")
                                                ) {
                                                  alert("Wrong!!");
                                                  score--;
                                                }
                                              }
                                            );
                                            choiceThree.addEventListener(
                                              "click",
                                              function () {
                                                if (
                                                  event.target.matches("button")
                                                ) {
                                                  alert("Correct!");
                                                  score++;
                                                  main.innerHTML = "";
                                                  alert(score);
                                                }
                                              }
                                            );
                                          }
                                        }
                                      );
                                      choiceFour.addEventListener(
                                        "click",
                                        function () {
                                          if (event.target.matches("button")) {
                                            alert("Wrong!");
                                            score--;
                                          }
                                        }
                                      );
                                    }
                                  }
                                );
                                choiceThree.addEventListener(
                                  "click",
                                  function () {
                                    if (event.target.matches("button")) {
                                      alert("Wrong!!");
                                      score--;
                                    }
                                  }
                                );
                                choiceFour.addEventListener(
                                  "click",
                                  function () {
                                    if (event.target.matches("button")) {
                                      alert("Wrong!");
                                      score--;
                                    }
                                  }
                                );
                              }
                            });
                          }
                        });
                        choiceTwo.addEventListener("click", function () {
                          if (event.target.matches("button")) {
                            alert("Wrong!!");
                            score--;
                          }
                        });
                        choiceThree.addEventListener("click", function () {
                          if (event.target.matches("button")) {
                            alert("Wrong!!");
                            score--;
                            // timeLeft - 10;
                          }
                        });
                      }
                    });
                    choiceTwo.addEventListener("click", function () {
                      if (event.target.matches("button")) {
                        alert("Wrong!!");
                        score--;
                      }
                    });
                    choiceThree.addEventListener("click", function () {
                      if (event.target.matches("button")) {
                        alert("Wrong!!");
                        score--;
                        // timeLeft - 10;
                      }
                    });
                    choiceFour.addEventListener("click", function () {
                      if (event.target.matches("button")) {
                        alert("Wrong!");
                        score--;
                      }
                    });
                  }
                });
              }
            });
            choiceTwo.addEventListener("click", function () {
              if (event.target.matches("button")) {
                alert("Wrong!!");
                score--;
              }
            });
            choiceThree.addEventListener("click", function () {
              if (event.target.matches("button")) {
                alert("Wrong!");
                score--;
              }
            });
          }
        });
      }
    });
    choiceFour.addEventListener("click", function () {
      if (event.target.matches("button")) {
        alert("Wrong!");
        score--;
      }
    });

    startTimer();
    localStorage.setItem("Highscore", score);
    var highscore = localStorage.getItem("Highscore");
  }
});

//  // X QUESTION
//  var questionEl = document.createElement("div");
//  questionEl.innerHTML = "Inside which HTML element do we put the JavaScript?";
//  intro.appendChild(questionEl);

//  // First multiple choice
//  var firstchoiceDiv = document.createElement("div");
//  intro.appendChild(firstchoiceDiv);
//  var choiceOne = document.createElement("button");
//  choiceOne.innerHTML = "javascript";
//  firstchoiceDiv.appendChild(choiceOne);

//  // Second multiple choice
//  var secondchoiceDiv = document.createElement("div");
//  intro.appendChild(secondchoiceDiv);
//  var choiceTwo = document.createElement("button");
//  choiceTwo.innerHTML = "scripting";
//  secondchoiceDiv.appendChild(choiceTwo);

//  // Third multiple choice
//  var thirdchoiceDiv = document.createElement("div");
//  intro.appendChild(thirdchoiceDiv);
//  var choiceThree = document.createElement("button");
//  choiceThree.innerHTML = "script";
//  thirdchoiceDiv.appendChild(choiceThree);

//  // Fourth multiple choice
//  var fourthchoiceDiv = document.createElement("div");
//  intro.appendChild(fourthchoiceDiv);
//  var choiceFour = document.createElement("button");
//  choiceFour.innerHTML = "js";
//  fourthchoiceDiv.appendChild(choiceFour);

//  // Outcomes

//  choiceOne.addEventListener("click", function (){
//      if (event.target.matches("button")) {
//          alert("Wrong!!");
//          score--;
//          // timeLeft - 10;
//      }
//  });
//  choiceTwo.addEventListener("click", function (){
//      if (event.target.matches("button")) {
//          alert("Wrong!!");
//          score--;
//      }
//  });
//  choiceThree.addEventListener("click", function (){
//      if (event.target.matches("button")) {
//          alert("Correct!");
//          score++;
//          main.innerHTML = "";

//      }
//  });
//  choiceFour.addEventListener("click", function (){
//      if (event.target.matches("button")) {
//          alert("Wrong!");
//          score--;
//      }
//  });
