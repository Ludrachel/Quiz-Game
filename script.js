const questions = [
    {
        question: "Qual o maior animal do mundo?",
        answers: [
            { text: "Tubarão", correct: false},
            { text: "Girafa", correct: false},
            { text: "Baleia azul", correct: true},
            { text: "Elefante", correct: false},
        ]
    },
    {
        question: "qual o maior Planeta do Sistema Solar?",
        answers: [
            { text: "Júpter", correct: true},
            { text: "Terra", correct: false},
            { text: "Saturno", correct: false},
            { text: "Urano", correct: false},
        ]
    },
    {
        question: "Qual é o País conhecido como 'Terra do Sol Nascente'?",
        answers: [
            { text: "Inglaterra", correct: false},
            { text: "Brasil", correct: false},
            { text: "Estados Unidos", correct: false},
            { text: "Japão", correct: true},
        ]
    },
    {
        question: "Em que Continente fica o Egito?",
        answers: [
            { text: "África", correct: true},
            { text: "Oceania", correct: false},
            { text: "Europa", correct: false},
            { text: "América do Norte", correct: false},
        ]
    },
    {
        question: "Quem foi o primeiro homem a pisar na lua?",
        answers: [
            { text: "Neil Armstrong", correct: true},
            { text: "Gil Slin", correct: false},
            { text: "Jhones Stiven", correct: false},
            { text: "Nenhum dos anteriores", correct: false},
        ]
    },
    {   question: "Quem foi o primeiro Presidente do Brasil?",
        answers: [
            { text: "Luís Inácio", correct: false},
            { text: "Juscelino Kubichek", correct: false},
            { text: "Deodoro da Fonseca", correct: true},
            { text: "Dilma Russef", correct: false},
        ]
    },
    {
        question: "Qual o maior Órgão do Corpo Humano?",
        answers: [
            { text: "Pulmão", correct: false},
            { text: "Pele", correct: true},
            { text: "Fígado", correct: false},
            { text: "Intestino Delgado", correct: false},
        ]
    },
    {
        question: "Qual é o metal cujo Símbolo Químico é o 'AU'?",
        answers: [
            { text: "Bronze", correct: false},
            { text: "Ferro", correct: false},
            { text: "Prata", correct: false},
            { text: "Ouro", correct: true},
        ]
    },
    {
        question: "Qual o idioma mais falado do mundo?",
        answers: [
            { text: "Português", correct: false},
            { text: "Hangul", correct: false},
            { text: "Espanhol", correct: false},
            { text: "Inglês", correct: true},
        ]
    },
    {
        question: "Quantos Graus tem um círculo completo?",
        answers: [
            { text: "120°", correct: false},
            { text: "180°", correct: false},
            { text: "360°", correct: true},
            { text: "100°", correct: false},
        ]
    }
];
const questionElement = document.getElementById("questão");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function StarQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach( answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jogue Novamente";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        StarQuiz()
    }
});
StarQuiz();
