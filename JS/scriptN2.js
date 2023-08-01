const questions = [
    {
        questions:"A DISTÁNCIA ENTRE URUGUAIANA E PORTO ALEGRE É DE?",
        answers: [
            { text: "288 NM.", correct: false},
            { text: "278 NM.", correct: false},
            { text: "298 NM.", correct: false},
            { text: "308 NM.", correct: true},
        ]
    },
    {
        questions:"O RUMO MAGNÉTICO DE URUGUAIANA PARA PORTO ALEGRE É DE?",
        answers: [
            { text: "097º.", correct: false},
            { text: "107°.", correct: true},
            { text: "092°", correct: false},
            { text: "082°", correct: false},
        ]
    },
    {
        questions:"A VELOCIDADE EM RELAÇÃO AO SOLO (VS) DURANTE A SUBIDA PARA PORTO ALEGRE É DE?",
        answers: [
            { text: "333 KT.", correct: false},
            { text: "363 KT.", correct: false},
            { text: "343 KT.", correct: true},
            { text: "353 KT.", correct: false},
        ]
    },
    {
        questions:"A PROA MAGNÉTICA NO FL250 É DE?",
        answers: [
            { text: "047º.", correct: false},
            { text: "067º.", correct: true},
            { text: "077º.", correct: false},
            { text: "057º.", correct: false},
        ]
    },
    {
        questions:"NO FL250, A PROA BÚSSOLA É DE 070°. O DESVIO DE BÚSSOLA É DE?",
        answers: [
            { text: "03°W.", correct: true},
            { text: "05°E.", correct: false},
            { text: "03°E.", correct: false},
            { text: "05°W.", correct: false},
        ]
    },
    {
        questions:"O CONSUMO ATÉ ATINGIR O INÍCIO DA DESCIDA (TOD) PARA FLORIANÓPOLIS É DE?",
        answers: [
            { text: "4534 KG.", correct: false},
            { text: "4334 KG.", correct: true},
            { text: "4634 KG.", correct: false},
            { text: "4434 KG.", correct: false},
        ]
    },
    {
        questions:"A DISÂANCIA DE DESCIDA EM FLORIANÓPOLIS É DE?",
        answers: [
            { text: "64 NM.", correct: true},
            { text: "84 NM.", correct: false},
            { text: "54 NM.", correct: false},
            { text: "74 NM.", correct: false},
        ]
    },
    {
        questions:"PARA A AUTONOMIA DESSE VOO, A QUANTIDADE DE COMBUSTÍVEL RESERVA EQUIVALE A?",
        answers: [
            { text: "10 MIN.", correct: false},
            { text: "05 MIN.", correct: true},
            { text: "08 MIN.", correct: false},
            { text: "30 MIN.", correct: false},
        ]
    },
    {
        questions:"A QUANTIDADE MÍNIMA REQUERIDA DE COMBUSTÍVEL PARA REALIZAÇÃO DESSE VOO É DE?",
        answers: [
            { text: "5784 KG.", correct: false},
            { text: "6184 KG.", correct: false},
            { text: "5984 KG.", correct: true},
            { text: "6384 KG", correct: false},
        ]
    },
    {
        questions:"O COMBUSTÍVEL MÍNIMO REQUERIDO EQUIVALE À AUTONOMIA MÍNIMA REGULAMENTAR (RBAC 121) DE?",
        answers: [
            { text: "01H09MIN.", correct: false},
            { text: "01H59MIN.", correct: true},
            { text: "01H39MIN.", correct: false},
            { text: "01H29MIN.", correct: false},
        ]
    },
    {
        questions:"A COMPONENTE DE VENTO PREDOMINANTE É DE?",
        answers: [
            { text: "PROA NO FL290 E NO FL250.", correct: false},
            { text: "PROA NO FL290 E DE CAUDA NO FL250.", correct: true},
            { text: "CAUDA NO FL290 E DE PROA NO FL250.", correct: false},
            { text: "CAUDA NO FL290 E NO FL250.", correct: false},
        ]
    },
    {
        questions:"O COMPRIMENTO DA PISTA DE URUGUAIANA É?",
        answers: [
            { text: "2000 M.", correct: false},
            { text: "1000 M.", correct: false},
            { text: "1500 M.", correct: true},
            { text: "2500 M.", correct: false},
        ]
    },
    {
        questions:"A VISIBILIDADE MÍNIMA PARA POUSO NA PISTA 32 DE FLORIANÓPOLIS, CONSIDERANDO O ALS INOP, DE UMA AERONAVE CATEGORIA A, É DE?",
        answers: [
            { text: "1600 M.", correct: true},
            { text: "2000 M.", correct: false},
            { text: "2800 M.", correct: false},
            { text: "4800 M.", correct: false},
        ]
    },
    {
        questions:"CONFORME IAC SBFL, A ALTITUDE MÍNIMA DE SEGURANÇA SE APLICA EM UM RAIO DE ALCANCE DE?",
        answers: [
            { text: "25 NM DO VOR FLN.", correct: true},
            { text: "NM DO DME FLN.", correct: false},
            { text: "10 NM DO DME FLN.", correct: false},
            { text: "10 NM DO VOR XRO.", correct: false},
        ]
    },
    {
        questions:"O SELETOR DE CURSOS DE UM VOR INDICA A (0)?",
        answers: [
            { text: "MARCAÇÃO.", correct: false},
            { text: "PROA.", correct: false},
            { text: "RUMO.", correct: true},
            { text: "LINHA DE POSIÇÃO.", correct: false},
        ]
    },
    {
        questions:"O FUSO HORÁRIO ABRANGE UMA FAIXA DE?",
        answers: [
            { text: "7°30' DE LONGITUDE.", correct: false},
            { text: "15º DE LONGITUDE.", correct: true},
            { text: "15° DE LATITUDE.", correct: false},
            { text: "7°30' DE LATITUDE.", correct: false},
        ]
    },
    {
        questions:"A CADA 1000 FT DE ALTITUDE A VELOCIDADE AERODIN MICA AUMENTA, EM RELAÇÃO À VELOCIDADE INDICADA, DE?",
        answers: [
            { text: "3%.", correct: false},
            { text: "2%.", correct: true},
            { text: "4%.", correct: false},
            { text: "1%.", correct: false},
        ]
    },
    {
        questions:"UMA AERONAVE PARA SEGUIR DETERMINADO RUMO, COM VENTO DE CAUDA E DA DIREITA, CORRIGIRÁ A PROA COM  NGULO DE DERIVA?",
        answers: [
            { text: "POSITIVO.", correct: true},
            { text: "INDIFERENTE.", correct: false},
            { text: "NEGATIVO.", correct: false},
            { text: "NULO.", correct: false},
        ]
    },
    {
        questions:"AS PROJEÇÕES CARTOGRÁFICAS, QUANTO À ORIGEM, PODEM SER?",
        answers: [
            { text: "ESFÉRICAS, GRATICULADAS, MERIDIONAIS E LOXODRÔMICAS.", correct: false},
            { text: "CILÍNDRICAS, CÔNICAS, GEOMÉTRICAS E PLANIFICADAS.", correct: false},
            { text: "MERCATOR, TANGENTES E TRANSVERSAS.", correct: false},
            { text: "ESTEREOGRÁFICAS, GNOMÔNICAS E ORTOGRÁFICAS.", correct: true},
        ]
    },
    {
        questions:"O SISTEMA MUNDIAL DE NAVEGAÇÃO POR SATÉLITES É RECONHECIDO PELAS INICIAIS?",
        answers: [
            { text: "RNAV.", correct: false},
            { text: "GLONASS.", correct: false},
            { text: "RVSM.", correct: false},
            { text: "GNSS.", correct: true},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0; 

function starQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próximo";
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