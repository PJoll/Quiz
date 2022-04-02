var startButton = document.getElementById("Start");
var timerElement = document.getElementById("timer-text");
var timer;
var timerCount;
var resultList = [];
var quizContainer = document.getElementById('quiz');
var myQuestions = [
    {
        question: "What is the use of an array?",
        answers: {
            a: "asdfasd",
            b: "hjkhjk",
            c: "tyutu",
            d: "456456",
        },
        correctAnswer: "c",
        userAnswer: "-1",
    },
    {
        question: "What does 'DOM' mean? ",
        answers: {
            a: "zcfasdf",
            b: "rtyrty",
            c: "yuiyui",
            d: "piup",
        },
        correctAnswer: "d",
        userAnswer: "-1",
    }
]
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
function displayHighscores(){
var initials = document.getElementById("initials-input").value 
document.getElementById("results").style.display = "none"
}
//store to local storage
startButton.addEventListener("click", function () {
    startButton.style.display = "none"
    updateTime()
    renderQuestion()
})
document.getElementById("Submit-Quiz", displayHighscores)
// function generateQuiz() {

//     function showQuestions(questions, quizContainer) {
//         var output = [];
//         var answers = {};
//         for (var i = 0; i < questions.length; i++) {
//             answers = [];
//             for (letter in questions[i].answers) {
//                 answers.push(
//                     '<label>'
//                     + '<input type="radio" name="question' + i + '" value="' + letter + '">'
//                     + letter + ': '
//                     + questions[i].answers[letter]
//                     + '</label>'
//                 );
//             }
//             output.push(
//                 '<div class="question">' + questions[i].question + '</div>'
//                 + '<div class="answers">' + answers.join('') + '</div>'
//             );
//         }
//         quizContainer.innerHTML = output.join('')
//     }
//     showQuestions(questions, quizContainer);
//     function showResults(questions, quizContainer, resultsContainer) {

//         var answersContainers = quizContainer.querySelectorAll('answers');
//         var userAnswer = "";
//         var numCorrect = 0;
//         for (var i = 0; i < questions.length; i++) {
//             userAnswer = (answersContainers[i].querySelector("input[name=question'+i'):checked") || {}).value;
//             if (userAnswer === questions[i], correctAnswer) {
//                 numCorrect++;
//             }
//         }
//         resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
//     }

//     // show the questions


//     submitButton.onclick = function () {
//         showResults(questions, quizContainer, resultsContainer);
//     }
// }
// var quizContainer = document.getElementById('quiz');
// var resultsContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit');
// generateQuiz();