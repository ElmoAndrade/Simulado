const questions = [
    {
        questions:"CONSIDERANDO AS DIST NCIAS DIRETAS NAS ENRC E VA’S DE CRUZEIRO, CALCULOU AUTONOMIA MÍNIMA REGULAMENTAR DE?",
        answers: [
            { text: "2H04MIN.", correct: false},
            { text: "2H14MIN.", correct: true},
            { text: "2H24MIN.", correct: false},
            { text: "2H34MIN.", correct: false},
        ]
    },
    {
        questions:"A VA MÉDIA ENCONTRADA DURANTE A SUBIDA FOI DE?",
        answers: [
            { text: "322KT.", correct: false},
            { text: "329KT.", correct: true},
            { text: "337KT.", correct: false},
            { text: "314KT.", correct: false},
        ]
    },
    {
        questions:"QUANDO NIVELOU, ENCONTRAVA-SE NA SEGUINTE MARCAÇÃO DO NDB CAXIAS (CXS)?",
        answers: [
            { text: "RDL 133.", correct: false},
            { text: "QDR 133 .", correct: false},
            { text: "AZIMUTE 133.", correct: false},
            { text: "QDM 133.", correct: true},
        ]
    },
    {
        questions:"AINDA NO TOC, OBTEVE MR PARA PFD DE?",
        answers: [
            { text: "015º.", correct: true},
            { text: "357º.", correct: false},
            { text: "345º.", correct: false},
            { text: "177º.", correct: false},
        ]
    },
    {
        questions:"NA VERTICAL DA POSIÇÃO BRICK, ESTIMOU COMBUSƠVEL GASTO EM?",
        answers: [
            { text: "2191KG.", correct: true},
            { text: "2346KG.", correct: false},
            { text: "2499KG.", correct: false},
            { text: "2605KG.", correct: false},
        ]
    },
    {
        questions:"DURANTE A DESCIDA PARA LONDRINA, CONSIDERANDO DESVIO DE BÚSSOLA DE 05ºW MANTEVE PB DE?",
        answers: [
            { text: "025º.", correct: false},
            { text: "030º.", correct: true},
            { text: "036º.", correct: false},
            { text: "039º.", correct: false},
        ]
    },
    {
        questions:"NO TOD, ENCONTROU MR PARA MARINGÁ (MRN) DE?",
        answers: [
            { text: "340º.", correct: false},
            { text: "327º.", correct: true},
            { text: "013º.", correct: false},
            { text: "020º.", correct: false},
        ]
    },
    {
        questions:"ATINGIU TOC NO FL250 AS?",
        answers: [
            { text: "17:13Z.", correct: false},
            { text: "17:17Z.", correct: true},
            { text: "17:24Z.", correct: false},
            { text: "17:28Z.", correct: false},
        ]
    },
    {
        questions:"NA POSIÇÃO NERVO, CALCULOU COMBUSƠVEL GASTO DE?",
        answers: [
            { text: "5645KG.", correct: true},
            { text: "5765KG.", correct: false},
            { text: "5995KG.", correct: false},
            { text: "5405KG", correct: false},
        ]
    },
    {
        questions:"FOI INSTRUÍDO DESCER ATÉ A ALTITUDE DE TRANSIÇÃO PARA POUSO, CUMPRINDO PROCEDIMENTO ILS Z DA PISTA 15 DE CAMPINAS. PORTANTO, ESƟMOU TOD PARA?",
        answers: [
            { text: "17:33.", correct: false},
            { text: "17:37.", correct: true},
            { text: "17:41.", correct: false},
            { text: "17:45.", correct: false},
        ]
    },
    {
        questions:"A ALTITUDE MÍNIMA DE SEGURANÇA, CONFORME O PROCEDIMENTO, PARA ESTA AERONAVE, SERÁ?",
        answers: [
            { text: "3900FT.", correct: true},
            { text: "4800FT.", correct: false},
            { text: "5000FT.", correct: false},
            { text: "5400FT.", correct: false},
        ]
    },
    {
        questions:"EM CASO DE APROXIMAÇÃO PERDIDA, A ACFT DEVERÁ?",
        answers: [
            { text: "MANTER 3000FT ATÉ AƟNGIR FIXO DE APROXIMAÇÃO PERDIDA.", correct: false},
            { text: "SUBIR PARA 6000FT MANTENDO RUMO DA PISTA ATÉ AƟNGIR 3000FT.", correct: true},
            { text: "MANTER 149° ATÉ LIVRAR OBSTÁCULO NO SETOR DE AFASTAMENTO, A 2300FT.", correct: false},
            { text: "CURVAR A DIREITA PARA O RUMO 149° LOGO APÓS INICIAR APROXIMAÇÃO PERDIDA.", correct: false},
        ]
    },
    {
        questions:"ENTRE O FIXO DE APROXIMAÇÃO FINAL E A CABECEIRA 15 DE SBKP, EXISTE UMA DISTÂNCIA DE?",
        answers: [
            { text: "10NM.", correct: false},
            { text: "5.0NM.", correct: false},
            { text: "5.5NM.", correct: true},
            { text: "6.2NM .", correct: false},
        ]
    },
    {
        questions:"PARA UMA AERONAVE QUE SE APROXIMA COM 110KT DE VS, A RAZÃO DE DESCIDA NA APROXIMAÇÃO FINAL DEVERÁ SER DE?",
        answers: [
            { text: "500FT/MIN.", correct: false},
            { text: "600FT/MIN.", correct: true},
            { text: "700FT/MIN.", correct: false},
            { text: "800FT/MIN.", correct: false},
        ]
    },
    {
        questions:"COM ALS “INOPERANTE”, A VISIBILIDADE MÍNIMA DESTE PROCEDIMENTO PARA UMA AERONAVE CATEGORIA C SERÁ?",
        answers: [
            { text: "800m.", correct: true},
            { text: "700m.", correct: false},
            { text: "1200m.", correct: false},
            { text: "1000m.", correct: false},
        ]
    },
    {
        questions:"O FIXO DE ESPERA EM APROXIMAÇÃO PERDIDA DEVERÁ SER MANTIDO A UMA ALTITUDE?",
        answers: [
            { text: "Mínima de 6500FT.", correct: false},
            { text: "Máxima de 6500FT.", correct: false},
            { text: "Mínima de 6000FT.", correct: true},
            { text: "Máxima de 6000FT.", correct: false},
        ]
    },
    {
        questions:"O SISTEMA MUNDIAL DE NAVEGAÇÃO POR SATÉLITES É CONHECIDO POR?",
        answers: [
            { text: "RNAV.", correct: false},
            { text: "GLONASS.", correct: false},
            { text: "RVSM.", correct: false},
            { text: "GNSS.", correct: true},
        ]
    },
    {
        questions:"O SELETOR DE CURSOS DO VOR INDICA O (A)?",
        answers: [
            { text: "PROA.", correct: false},
            { text: "MARCAÇÃO MAGNÉTICA.", correct: false},
            { text: "MARCAÇÃO RELATIVA.", correct: false},
            { text: "RUMO.", correct: true},
        ]
    },
    {
        questions:"UM FUSO HORÁRIO EQUIVALE, NO EQUADOR, A UMA DIST NCIA DE?",
        answers: [
            { text: "600nm.", correct: false},
            { text: "600km.", correct: false},
            { text: "900nm.", correct: true},
            { text: "900km.", correct: false},
        ]
    },
    {
        questions:"APÓS O POUSO, LIVRANDO A PISTA, A AERONAVE DEVERÁ CHAMAR O CONTROLE DE SOLO NA FREQUÊNCIA PREVISTA DE?",
        answers: [
            { text: "118.25MHz.", correct: false},
            { text: "110.30MHz.", correct: false},
            { text: "132.10MHz.", correct: false},
            { text: "121.90MHz.", correct: true},
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