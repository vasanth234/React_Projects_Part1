const data = [
    {
        id: 1,
        question: "Which of these fish is actually a fish",
        answers: [
            { answer: "Swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "Starfish", isCorrect: false },
            { answer: "crazyfish", isCorrect: false },
        ]
    },
    {
        id: 2,
        question: "A flutter is a group of:",
        answers: [
            { answer: "bees", isCorrect: false },
            { answer: "penguins", isCorrect: false },
            { answer: "butterflies", isCorrect: true },
            { answer: "camels", isCorrect: false },
        ]
    },
    {
        id: 3,
        question: "A group of which animals is referred to as a wake?",
        answers: [
            { answer: "bats", isCorrect: false },
            { answer: "vultures", isCorrect: true },
            { answer: "ants", isCorrect: false },
        ]
    }
];

const games = document.querySelector(".game");
const results = document.querySelector('.result');
const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const result=()=>{
  results.style.display='block';
  games.style.display='none';
  results.querySelector('.correct').textContent=`Correct Answers:${correctCount}`
   results.querySelector('.wrong').textContent=`Wrong Answers:${wrongCount}`
    results.querySelector('.score').textContent=`Score:${(correctCount-wrongCount)*10}`

}

const ShowQuestion = (Index) => {
    if(qIndex===data.length)return result()
    selectedAnswer=null;
    question.textContent = data[Index].question;
    answers.innerHTML = data[Index].answers.map((item, index) => {
        return `
            <div class="answer">
                <input name='answer' type="radio" id="answer-${index}" value="${item.isCorrect}">
                <label for="answer-${index}">${item.answer}</label>
            </div>
        `;
    }).join('');

    // Attach event listeners to the inputs after they are created
    answers.querySelectorAll('input').forEach(input => {
        input.addEventListener('change', (e) => {
            selectedAnswer = e.target.value; // Get the value of the selected input
            console.log(selectedAnswer);
        });
    });
}

const SubmitAnswer=()=>{
    submit.addEventListener('click',()=>{

        if(selectedAnswer!==null){
             selectedAnswer==='true' ? correctCount++ : wrongCount++
        qIndex++
        ShowQuestion(qIndex)
        }
        else alert("please select the answer")
       
    })
}

SubmitAnswer();

ShowQuestion(qIndex);
