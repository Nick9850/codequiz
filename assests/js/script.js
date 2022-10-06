var timeLeft = 60;
var startQuizBtnEl = document.querySelector(".start-btn");
var mainTextEl = document.querySelector(".mainText");
var startDiv = document.querySelector("#startdiv");
var questionContainer = document.querySelector(".start-page-title");
var answerContainer = document.querySelector(".answer-container");

var timerEl = document.querySelector("#timer");
var timerId;

//Wrong answer function
var removeWrong = function () {
timeLeft = timeLeft - 5;
mainTextEl.replaceChild(questionContainerTwo, questionContainer);
window.alert("Wrong Answer! You lost 5 seconds!")
};

//Enters the questions page
startQuizBtnEl.addEventListener("click", function () {
  mainTextEl.replaceChild(questionContainer, startDiv);
});

//Question container
var questionContainer = document.createElement("div");
questionContainer.className = "question-container";
mainTextEl.appendChild.questionContainer;

//Q1
var question = document.createElement("h1");
question.className = "question";
question.textContent = "1) In web development, Html ...";
questionContainer.appendChild(question);

//Answer container
var answerContainer = document.createElement("div");
answerContainer.className = "answer-container";
questionContainer.appendChild(answerContainer);

//answer choice one
var answerOne = document.createElement("button");
answerOne.className = "answerOne";
answerOne.textContent = "is used for math";
answerContainer.appendChild(answerOne);
answerOne.addEventListener("click", removeWrong);

//answer choice two
var answerTwo = document.createElement("button");
answerTwo.className = "answerTwo";
answerTwo.textContent = "is used for animation";
answerContainer.appendChild(answerTwo);
answerTwo.addEventListener("click", removeWrong);

//answer choice three
var answerThree = document.createElement("button");
answerThree.className = "answerThree";
answerThree.textContent = "is used to create websites";
answerContainer.appendChild(answerThree);
answerThree.addEventListener("click", function () {
mainTextEl.replaceChild(questionContainerTwo, questionContainer),
  window.alert("Right answer! Well done!");
});

//answer choice four
var answerFour = document.createElement("button");
answerFour.className = "answerFour";
answerFour.textContent = "is used for nothing";
answerContainer.appendChild(answerFour);
answerFour.addEventListener("click", removeWrong);

var removeWrong = function () {
  timeLeft = timeLeft - 5;
  mainTextEl.replaceChild(questionContainerThree, questionContainerTwo);
  window.alert("Wrong Answer! You lost 5 seconds!");
};

//Question container
var questionContainerTwo = document.createElement("div");
questionContainerTwo.className = "question-container";
mainTextEl.appendChild.questionContainerTwo;

//Q2
var question = document.createElement("h1");
question.className = "question";
question.textContent = "2) Arrays in JavaScript can be used to store ____.";
questionContainerTwo.appendChild(question);

//create answer container
var answerContainer = document.createElement("div");
answerContainer.className = "answer-container";
questionContainerTwo.appendChild(answerContainer);

//answer choice one
var answerOne = document.createElement("button");
answerOne.className = "answerOne";
answerOne.textContent = "booleans";
answerContainer.appendChild(answerOne);
answerOne.addEventListener("click", removeWrong);

//answer choice two
var answerTwo = document.createElement("button");
answerTwo.className = "answerTwo";
answerTwo.textContent = "strings";
answerContainer.appendChild(answerTwo);
answerTwo.addEventListener("click", removeWrong);


//answer choice three
var answerThree = document.createElement("button");
answerThree.className = "answerThree";
answerThree.textContent = "numbers";
answerContainer.appendChild(answerThree);
answerThree.addEventListener("click", removeWrong);

//answer choice four
var answerFour = document.createElement("button");
answerFour.className = "answerFour";
answerFour.textContent = "all of the above";
answerContainer.appendChild(answerFour);
answerFour.addEventListener("click", function(){
mainTextEl.replaceChild(questionContainerThree, questionContainerTwo),
  window.alert("Right answer! Well done!");
})

var removeWrong = function () {
  timeLeft = timeLeft - 5;
  mainTextEl.replaceChild(questionContainerFour, questionContainerThree);
  window.alert("Wrong Answer! You lost 5 seconds!");
};

//Question container
var questionContainerThree = document.createElement("div");
questionContainerThree.className = "question-container";
mainTextEl.appendChild.questionContainerThree;

//question three
var question = document.createElement("h1");
question.className = "question";
question.textContent = "3) The condition in an if / else statement is enclosed with ________.";
questionContainerThree.appendChild(question);

//create answer container
var answerContainer = document.createElement("div");
answerContainer.className = "answer-container";
questionContainerThree.appendChild(answerContainer);

//answer choice one
var answerOne = document.createElement("button");
answerOne.className = "answerOne";
answerOne.textContent = "quotes";
answerContainer.appendChild(answerOne);
answerOne.addEventListener("click", removeWrong);

//answer choice two
var answerTwo = document.createElement("button");
answerTwo.className = "answerTwo";
answerTwo.textContent = "curly brackets";
answerContainer.appendChild(answerTwo);
answerTwo.addEventListener("click", removeWrong);


//answer choice three
var answerThree = document.createElement("button");
answerThree.className = "answerThree";
answerThree.textContent = "parenthesis";
answerContainer.appendChild(answerThree);
answerThree.addEventListener("click", removeWrong);

//answer choice four
var answerFour = document.createElement("button");
answerFour.className = "answerFour";
answerFour.textContent = "all of the above";
answerContainer.appendChild(answerFour);
answerFour.addEventListener("click", function(){
mainTextEl.replaceChild(questionContainerFour, questionContainerThree),
  window.alert("Right answer! Well done!");
})

var removeWrong = function () {
  timeLeft = timeLeft - 5;
  mainTextEl.replaceChild(questionContainerFive, questionContainerFour);
  window.alert("Wrong Answer! You lost 5 seconds!");
};

//Question container
var questionContainerFour = document.createElement("div");
questionContainerFour.className = "question-container";
mainTextEl.appendChild.questionContainerFour;

//question four
var question = document.createElement("h1");
question.className = "question";
question.textContent = "4) Inside which HTML element do we put the JavaScript?";
questionContainerFour.appendChild(question);

//create answer container
var answerContainer = document.createElement("div");
answerContainer.className = "answer-container";
questionContainerFour.appendChild(answerContainer);

//answer choice one
var answerOne = document.createElement("button");
answerOne.className = "answerOne";
answerOne.textContent = "<scripting>";
answerContainer.appendChild(answerOne);
answerOne.addEventListener("click", removeWrong);

//answer choice two
var answerTwo = document.createElement("button");
answerTwo.className = "answerTwo";
answerTwo.textContent = "<javascript>";
answerContainer.appendChild(answerTwo);
answerTwo.addEventListener("click", removeWrong);


//answer choice three
var answerThree = document.createElement("button");
answerThree.className = "answerThree";
answerThree.textContent = "<js>";
answerContainer.appendChild(answerThree);
answerThree.addEventListener("click", removeWrong);

//answer choice four
var answerFour = document.createElement("button");
answerFour.className = "answerFour";
answerFour.textContent = "<script>";
answerContainer.appendChild(answerFour);
answerFour.addEventListener("click", function(){
mainTextEl.replaceChild(questionContainerFive, questionContainerFour),
  window.alert("Right answer! Well done!");
})

var removeWrong = function () {
  timeLeft = timeLeft - 5;
  mainTextEl.replaceChild(endPage, questionContainerFive);
  window.alert("Wrong Answer! You lost 5 seconds!");
};

//Question container
var questionContainerFive = document.createElement("div");
questionContainerFive.className = "question-container";
mainTextEl.appendChild.questionContainerFive;

//question five
var question = document.createElement("h1");
question.className = "question";
question.textContent = "5) How do you create a function in JavaScript?";
questionContainerFive.appendChild(question);

//create answer container
var answerContainer = document.createElement("div");
answerContainer.className = "answer-container";
questionContainerFive.appendChild(answerContainer);

//answer choice one
var answerOne = document.createElement("button");
answerOne.className = "answerOne";
answerOne.textContent = "function , myFunction()";
answerContainer.appendChild(answerOne);
answerOne.addEventListener("click", removeWrong);

//answer choice two
var answerTwo = document.createElement("button");
answerTwo.className = "answerTwo";
answerTwo.textContent = "function myFunction()";
answerContainer.appendChild(answerTwo);
answerTwo.addEventListener("click", function () {
  mainTextEl.replaceChild(endPage, questionContainerFive),
    window.alert("Right answer! Well done!");
});

//answer choice three
var answerThree = document.createElement("button");
answerThree.className = "answerThree";
answerThree.textContent = "function = myFunction()";
answerContainer.appendChild(answerThree);
answerThree.addEventListener("click", removeWrong);

//answer choice four
var answerFour = document.createElement("button");
answerFour.className = "answerFour";
answerFour.textContent = "function: myFunction";
answerContainer.appendChild(answerFour);
answerFour.addEventListener("click", removeWrong);

//Question End container
var endPage = document.createElement("div");
endPage.className = "start-page-title";
 
//create SUBMIT button on the the End Page DIV
var submitButton = document.createElement("button");
submitButton.className = "end-btn";
submitButton.textContent = "SUBMIT Quiz";
endPage.appendChild(submitButton);


//clicking submit button brings up initials input box
submitButton.addEventListener("click", function () {
  clearInterval(timerId);
  var initialContainer = document.createElement("div");
  endPage.appendChild(initialContainer);
  var submitInitials = document.createElement("button");
  submitInitials.setAttribute("id", "initials");
  submitInitials.textContent = "SAVE";
  submitInitials.className = "save-btn"
  endPage.appendChild(submitInitials);
  

  //create input box
  var initialBox = document.createElement("input");
  initialBox.setAttribute("name", "input");
  initialBox.setAttribute("placeholder", "ENTER INITIALS");
  initialBox.setAttribute("id", "inputbox");
  initialBox.setAttribute("type", "text");
  initialContainer.appendChild(initialBox);

  document.querySelector("#initials").addEventListener("click", function () {
    var initials = document.querySelector("#inputbox").value;
    console.log(initials, timeLeft);
    localStorage.setItem ("highscore", initials+" " + timeLeft)
  var viewHighScore = document.createElement("p");
  viewHighScore.textContent = "highscore" + initials + "  " + timeLeft;
  initialContainer.appendChild (viewHighScore)
  });
});


//Countdown timer function
startQuizBtnEl.addEventListener("click", countdown);
function countdown() {
  timerId = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.textContent = "Time left is " + timeLeft;
    } else {
      timerEl.textContent = "";
      clearInterval(timerId);
      window.alert("You ran out of time!");
    }

    timeLeft = timeLeft - 1;
  }, 1000);
}