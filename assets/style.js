function generateQuiz(questions, quizContainer, resultsContainer, resultsButton){

	function showQuestions(questions, quizContainer){
		// code will go here
        var output = [];
        var answers ={};
    for (var i=0; i<questions.length; i++){
        answers = [];
        for (letter in questions[i].answers){
            answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
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
	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions


	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
var myQuestions =[
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