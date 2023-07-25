const questions = [
    {
        questions:"qunatos anos eu tenho?",
        answers: [
            { text: "19", correct: false},
            { text: "18", correct: false},
            { text: "17", correct: false},
            { text: "15", correct: false},
            { text: "20", correct: true},
        ]
    },
    {
        questions:"Qual é meu nome?",
        answers: [
            { text: "Henrique", correct: false},
            { text: "Elmo", correct: true},
            { text: "Erisson", correct: false},
            { text: "Erick", correct: false},
            { text: "Ira", correct: false},
        ]
    },
    {
        questions:"Qual é o nome do maior mamifero aquatico?",
        answers: [
            { text: "elefante", correct: false},
            { text: "cobra", correct: false},
            { text: "sapo", correct: false},
            { text: "baleia", correct: true},
            { text: "Onça", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0; 

function starQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    ShowQuestion();
}

function ShowQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    // Embaralhar as respostas antes de exibi-las
    const shuffledAnswers = shuffleArray(currentQuestion.answers);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Função para embaralhar um array usando o algoritmo de Fisher-Yates (modern version).
function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}



function resetState(){
   nextButton.style.display = "none";
   while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
   }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    questions[currentQuestionIndex].selectedAnswer = selectedBtn.innerHTML; // Armazena a resposta selecionada no objeto questions
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function handleNexButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        ShowQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNexButton();
    }else{
        starQuiz();
    }
})

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!<br><br>`;
    let htmlContent = ""; // Variável para armazenar o conteúdo das perguntas

    questions.forEach((question, index) => {
        const selectedAnswer = question.answers.find(answer => answer.text === questions[index].selectedAnswer);
        const isCorrect = selectedAnswer && selectedAnswer.correct;
        const emoji = isCorrect ? "✅" : "❌";

        // Adiciona a pergunta atual ao conteúdo HTML com espaçamento
        htmlContent += `${index + 1}. ${question.questions} - ${questions[index].selectedAnswer} ${emoji}<br><br>`;
    });

    questionElement.innerHTML += htmlContent; // Atualiza o elemento com todo o conteúdo das perguntas
    nextButton.innerHTML = "Tentar novamente";
    nextButton.style.display = "block";
}




starQuiz();