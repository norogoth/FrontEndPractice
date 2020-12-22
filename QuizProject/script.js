const quizData = [
    {
        question: "What is dog?",
        a: "A babboon",
        b: "not a dog.",
        c: "a dog.",
        d: "a banana?!?!",
        correct: "c"
    }
    ,
    {
        question: "What is a banana?",
        a: "A babboon",
        b: "not a dog.",
        c: "a VEGETABLE?!",
        d: "a banana?!?!",
        correct: "d"
    }
];

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuestion = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuestion];
    question
    currentQuestion++;
}