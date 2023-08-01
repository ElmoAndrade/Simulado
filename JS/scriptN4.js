const questions = [
    {
        questions:"Qual a VI de Subida?",
        answers: [
            { text: "209KT.", correct: false},
            { text: "199KT.", correct: true},
            { text: "225KT.", correct: false},
            { text: "187KT.", correct: false},
        ]
    },
    {
        questions:"Qual tempo de subida até o TOC?",
        answers: [
            { text: "19MIN.", correct: true},
            { text: "25MIN.", correct: false},
            { text: "15MIN.", correct: false},
            { text: "13MIN.", correct: false},
        ]
    },
    {
        questions:"Qual a coordenada, em graus, minutos, e segundos, da posição EMAKE?",
        answers: [
            { text: `02°15'29"S/054°10'22"W.`, correct: true},
            { text: `02°49'29"S / 054°37'22"W.`, correct: false},
            { text: `02°57'36"S/ 057°45'22"W`, correct: false},
            { text: `10°25'29"S/134°47'22"W`, correct: false},
        ]
    },
    {
        questions:"Qual a ETO na posição MATRA?",
        answers: [
            { text: "0117Z.", correct: false},
            { text: "0129Z.", correct: true},
            { text: "0135Z.", correct: false},
            { text: "0145Z.", correct: false},
        ]
    },
    {
        questions:"Qual o tempo de descida até Belém?",
        answers: [
            { text: "30,5min.", correct: false},
            { text: "17,5min.", correct: false},
            { text: "27,5min.", correct: false},
            { text: "20,5min.", correct: true},
        ]
    },
    {
        questions:"Qual autonomia para realização do voo considerando RBAC 121?",
        answers: [
            { text: "02H20Min.", correct: false},
            { text: "02H25Min.", correct: false},
            { text: "02H35Min .", correct: true},
            { text: "02H45Min.", correct: false},
        ]
    },
    {
        questions:"Qual o combustível total para realização do voo, considerando um combustível de taxi de 200kg?",
        answers: [
            { text: "6150KG.", correct: false},
            { text: "6140KG.", correct: false},
            { text: "6174KG.", correct: true},
            { text: "6195KG.", correct: false},
        ]
    },
    {
        questions:"Qual o tempo de subida até a alternativa?",
        answers: [
            { text: "09MIN.", correct: false},
            { text: "13MIN.", correct: true},
            { text: "17MIN.", correct: false},
            { text: "20MIN.", correct: false},
        ]
    },
    {
        questions:"Qual a ETA em SBSL?",
        answers: [
            { text: "0250Z.", correct: false},
            { text: "0258Z.", correct: true},
            { text: "0240Z.", correct: false},
            { text: "0305Z.", correct: false},
        ]
    },
    {
        questions:"Qual a frequência do APP São Luís?",
        answers: [
            { text: "121.50MHz.", correct: false},
            { text: "129.40MHz.", correct: false},
            { text: "118.90MHz.", correct: false},
            { text: "119.10MHz.", correct: true},
        ]
    },
    {
        questions:"Qual a elevação de SBSL?",
        answers: [
            { text: "177FT.", correct: true},
            { text: "1296FT.", correct: false},
            { text: "250FT.", correct: false},
            { text: "354FT.", correct: false},
        ]
    },
    {
        questions:"Chegando pelo RM170º, qual será a MSA?",
        answers: [
            { text: "2000FT.", correct: true},
            { text: "FL075.", correct: false},
            { text: "FL070.", correct: false},
            { text: "FL080.", correct: false},
        ]
    },
    {
        questions:"Qual a altitude mínima que o piloto deverá manter para o bloqueio de SLI?",
        answers: [
            { text: "2000FT.", correct: true},
            { text: "2500FT.", correct: false},
            { text: "3500FT.", correct: false},
            { text: "5500FT.", correct: false},
        ]
    },
    {
        questions:"Qual o procedimento de arremetida?",
        answers: [
            { text: "Subir para 4000’ no QDM 243.", correct: false},
            { text: "Subir para 8000’ e chamar o APP.", correct: false},
            { text: "Subir para 6500’ e curvar à direita.", correct: false},
            { text: "Subir para 2000’ na RDL 243.", correct: true},
        ]
    },
    {
        questions:"Qual a R/D para uma aeronave que se aproxima com velocidade de 150KT?",
        answers: [
            { text: "280FT/MIN.", correct: false},
            { text: "650FT/MIN.", correct: false},
            { text: "700FT/MIN.", correct: true},
            { text: "500FT/MIN.", correct: false},
        ]
    },
    {
        questions:"Qual a MDA e a Visibilidade para uma ACFT CAT B em SBBE?",
        answers: [
            { text: "660’ / 2200M.", correct: false},
            { text: "470’ / 1200M.", correct: false},
            { text: "660’ / 1600M.", correct: true},
            { text: "470’ / 2200M.", correct: false},
        ]
    },
    {
        questions:"Qual o RM da perna de afastamento na espera?",
        answers: [
            { text: "080º.", correct: false},
            { text: "243º.", correct: false},
            { text: "086º.", correct: false},
            { text: "266º.", correct: true},
        ]
    },
    {
        questions:"Qual a altitude mínima que o piloto deverá estar ao final da curva base?",
        answers: [
            { text: "1500FT.", correct: false},
            { text: "2500FT.", correct: false},
            { text: "1300FT.", correct: true},
            { text: "2000FT.", correct: false},
        ]
    },
    {
        questions:"Qual a altitude do obstáculo mais alto da carta IAC SBSL?",
        answers: [
            { text: "NDA.", correct: true},
            { text: "2654FT.", correct: false},
            { text: "254FT.", correct: false},
            { text: "3256FT.", correct: false},
        ]
    },
    {
        questions:"Em um procedimento PARA CIRCULAR, quais os mínimos para uma ACFT CAT C, respectivamente, no AD de alternativa?",
        answers: [
            { text: "730’ / 560’ / 3200m.", correct: false},
            { text: "690’ / 520’ / 2400m.", correct: true},
            { text: "890’ / 900’ / 4000m.", correct: false},
            { text: "640’ / 470’ / 1600m.", correct: false},
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