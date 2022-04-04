// Declare variables
var startButton = document.getElementById("Start");
var timerElement = document.getElementById("timer-text");
var submitButton = document.getElementById("Submit-Quiz")
var timer;
var timerCount;
var resultList = [];
var quizContainer = document.getElementById('quiz');
var myQuestions = [
    {
        question: "What is the use of an array?",
        answers: {
            a: "To only store numbers",
            b: "To hide elements",
            c: "To store a fixed sized collection of the same data type",
            d: "All Of the Above",
        },
        correctAnswer: "c",
        userAnswer: "-1",
    },
    {
        question: "How do you find the highest number of x and y? ",
        answers: {
            a: "max(x,y)",
            b: "top(x,y)",
            c: "highest.value(x,y) ",
            d: "Math.max(x,y)",
        },
        correctAnswer: "d",
        userAnswer: "-1",
    },
    {
        question: "Java is the same as Java Scipt? ",
        answers: {
            a: "False",
            b: "True",
        },
        correctAnswer: "a",
        userAnswer: "-1",
    },
    {
        question: "How do you declare a Java Script variable? ",
        answers: {
            a: "variable catBreed",
            b: "for cat-Breed",
            c: "var catBreed ",
            d: "var (catBreed)",
        },
        correctAnswer: "c",
        userAnswer: "-1",
    },
    {
        question: "The external JavaScript file must contain the <script> tag? ",
        answers: {
            a: "False",
            b: "True",
        },
        correctAnswer: "a",
        userAnswer: "-1",
    },
]
// setup timer
var timeLeft = 30
var timer
var currentQuestion = 0
function updateTime() {
    timeLeft--
    if (timeLeft < 0) {
        quizEnded()
    } else {
        timerElement.innerHTML = timeLeft
        timer = setTimeout(updateTime, 1000)
    }
}
//set up questions
function renderQuestion() {
    var html = "<div>"
    html += "<p>" + myQuestions[currentQuestion].question + "</p>"
    for (letter in myQuestions[currentQuestion].answers) {
        html += (
            '<label>'
            + '<input type="radio" name="question' + currentQuestion + '" value="' + letter + '">'
            + letter + ': '
            + myQuestions[currentQuestion].answers[letter]
            + '</label>'
        );
    }
    html += "</div>"
    quizContainer.innerHTML = html
    setTimeout(function () {
        var inputs = quizContainer.querySelectorAll("input")
        for (var input of inputs) {
            input.addEventListener("change", checkQuestion)
        }
    }, 10)
}

function checkQuestion(e) {
    var value = e.target.value
    myQuestions[currentQuestion].userAnswer = value
    if (
        myQuestions[currentQuestion].userAnswer != myQuestions[currentQuestion].correctAnswer

    ) {
        timeLeft -= 10
    }
    currentQuestion++
    if (
        currentQuestion == myQuestions.length
    ) {
        quizEnded()
    } else {
        renderQuestion()
    }

}
// end the quiz
function quizEnded() {
    clearTimeout(timer)
    var score = 0
    for (var question of myQuestions) {
        if (question.userAnswer == question.correctAnswer) {
            score++
        }
    }
    quizContainer.innerHTML = ""
    document.getElementById("Final-Score").innerHTML = score
    document.getElementById("results").style.display = "block"

}
function displayHighscores() {
    var initials = document.getElementById("initials-input").value
    document.getElementById("results").style.display = "none"
    localStorage.setItem("results", JSON.stringify(initials));
    renderMessage();
    localStorage.setItem("results", JSON.stringify(initials));
}
startButton.addEventListener("click", function () {
    startButton.style.display = "none"
    updateTime()
    renderQuestion()
})
document.getElementById("Submit-Quiz", displayHighscores)

submitButton.addEventListener("click", function () {
    submitButton.style.display = "none"
    document.getElementById("results").style.display = "block"
    clearTimeout()
    renderQuestion()
})