var myQuestions = [
    {
        question: "What is the use of an array?",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: "c"
    },
    {
        question: "What does 'DOM' mean? ",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        }
    }
]
function generateQuiz(questions, quizContainer, resultsContainer, resultsButton) {

    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers = {};
        for (var i = 0; i < questions.length; i++) {
            answers = [];
            for (letter in questions[i].answers) {
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + 'div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('')
    }
    showQuestions(questions, quizContainer);
    function showResults(questions, quizContainer, resultsContainer) {

        var answersContainers = quizContainer.querySelectorAll('answers');
        var userAnswer = "";
        var numCorrect = 0;
        for (var i = 0; i < questions.length; i++) {
            userAnswer = (answersContainers[i].querySelector("input[name=question'+i'):checked") || {}).value;
            if (userAnswer === questions[i], correctAnswer) {
                numCorrect++;
            }
        }
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show the questions
    

    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);