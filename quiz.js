const quizData=[
    {
        question: 'What is "cynophobia?',
        a :'fear of dogs',
        b :'fear of sleep', 
        c :'fear of medicine',
        d :'fear of height',
        correct:'a',
    },
    {
        question: 'How long is an Olympic swimming pool (in meters)?',
        a :'40',
        b :'60', 
        c :'50',
        d :'45',
        correct:'c',
    },
    {
        question: 'What is India\'s national animal?',
        a :'elephant',
        b :'tiger', 
        c :'lion',
        d :'cheetah',
        correct:'b',
    },
    {
        question: 'What is converted into alcohol during brewing?',
        a :'grain',
        b :'sugar', 
        c :'water',
        d :'honey',
        correct:'b',
    },
    {
        question: 'How many languages are written from right to left?',
        a :'14',
        b :'15', 
        c :'11',
        d :'12',
        correct:'d',
    },

];
const quiz=document.getElementById("quiz")
const answerE1s=document.querySelectorAll(".answer")
const questionE1=document.getElementById("question")
const a_text=document.getElementById("a_text")
const b_text=document.getElementById("b_text")
const c_text=document.getElementById("c_text")
const d_text=document.getElementById("d_text")
const submitBtn=document.getElementById("submit")

let currentQuiz=0;
let score=0;

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData=quizData[currentQuiz]

    questionE1.value=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d

}

function deselectAnswers(){
    answerE1s.forEach(answerE1s=> answerE1s.checked=false)
}

function getSelected(){
    let answerE1s
    answerE1s.forEach(answer=>{
        if(answer.checked){
            answer=answerE1s.id
        }
    })
    return answer
}

