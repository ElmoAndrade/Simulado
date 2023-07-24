const questions = [
    {
        questions:"A marcação verdadeira ou magnética e a linha de posição verdadeira ou magnética são elementos determinantes da posição de uma aeronave em voo. Conceitualmente, marcação e linha de posição referem-se, respectivamente, ao sentido:",
        answers: [
            { text: "Do fixo compulsório para a estação e da estação para o fixo compulsório", correct: false},
            { text: "Da estação para a aeronave e da aeronave para a estação", correct: false},
            { text: " Da estação para o fixo compulsório e do fixo compulsório para estação", correct: false},
            { text: "Da aeronave para estação e da estação para a aeronave", correct: true},
        ]
    },
    {
        questions:"De acordo com a resposta da questão número 1, a MMG de Maceió (340MCO) que onfirma o TOC é:",
        answers: [
            { text: "QDR081", correct: false},
            { text: "QDM081 ", correct: true},
            { text: "QDR261", correct: false},
            { text: "QDM261", correct: false},
        ]
    },
    {
        questions:" A distância voada no FL330 e no FL260, respectivamente, são:",
        answers: [
            { text: "249NM e 87NM ", correct: false},
            { text: "229NM e 77NM ", correct: false},
            { text: "219NM e 77NM", correct: false},
            { text: "239NM e 87NM", correct: true},
        ]
    },
    {
        questions:"O pouso em Mossoró está estimado para:",
        answers: [
            { text: "1740Z", correct: false},
            { text: "1808Z", correct: true},
            { text: "1748Z", correct: false},
            { text: "1800Z", correct: false},
        ]
    },
    {
        questions:" O combustível consumido até atingir o FL260 é de:",
        answers: [
            { text: "7666KG", correct: true},
            { text: "7506KG", correct: false},
            { text: "7606KG", correct: false},
            { text: "7566KG", correct: false},
        ]
    },
    {
        questions:"A PB adotada no FL260 é:",
        answers: [
            { text: "206º", correct: false},
            { text: "226º", correct: true},
            { text: "203º", correct: false},
            { text: "183º", correct: false},
        ]
    },
    {
        questions:"A autonomia mínima regulamentar para o voo proposto é:",
        answers: [
            { text: "2H04min", correct: false},
            { text: "2H24MIN", correct: true},
            { text: "2H14min", correct: false},
            { text: "2H34MIN", correct: false},
        ]
    },
    {
        questions:"A quantidade de combustível mínima para realização do voo é de:",
        answers: [
            { text: "10766KG", correct: true},
            { text: "10866KG", correct: false},
            { text: "11066KG ", correct: false},
            { text: "11166KG", correct: false},
        ]
    },
    {
        questions:"O estimado de pouso em SBUF é:",
        answers: [
            { text: "1919Z", correct: false},
            { text: "1847Z", correct: true},
            { text: "1907Z", correct: false},
            { text: "1859Z", correct: false},
        ]
    },
    {
        questions:"Baseado na questão 01, a linha de posição verdadeira de Recife (116.90 REC) que confirma o TOD no FL260 é:",
        answers: [
            { text: "RDL295 ", correct: true},
            { text: "QDM115 ", correct: false},
            { text: "Azimute 115 ", correct: false},
            { text: "QDR295", correct: false},
        ]
    },
    {
        questions:"Caso o controle não autorize proa direta para decolagem de Santa Maria, o procedimento a ser adotado será a saída:",
        answers: [
            { text: "DENDO B", correct: false},
            { text: "ORAGO B", correct: true},
            { text: "NICAR B ", correct: false},
            { text: "CONDE B", correct: false},
        ]
    },
    {
        questions:"O comprimento da pista de SBUF é",
        answers: [
            { text: "1800M", correct: true},
            { text: "2400M", correct: false},
            { text: "883M", correct: false},
            { text: "4000M", correct: false},
        ]
    },
    {
        questions:"A visibilidade mínima para pouso na pista 14 de SBUF, de aeronave CAT C, é de:",
        answers: [
            { text: "1600M", correct: false},
            { text: "2400M", correct: false},
            { text: "1200M", correct: true},
            { text: "4800M", correct: false},
        ]
    },
    {
        questions:" Conforme IAC SBUF, para pouso direto na RWY32, a razão de descida na aproximação final, com velocidade 160KT:",
        answers: [
            { text: "600FPM", correct: false},
            { text: "700FPM", correct: true},
            { text: "800FPM", correct: false},
            { text: "900FPM", correct: false},
        ]
    },
    {
        questions:"Conforme a IAC SBUF, os rumos do circuito de espera são:",
        answers: [
            { text: "148 / 313", correct: false},
            { text: "148 / 328", correct: true},
            { text: "210 / 313 ", correct: false},
            { text: "210 / 328", correct: false},
        ]
    },
    {
        questions:"O sistema de luzes de aproximação é conhecido pela sigla:",
        answers: [
            { text: "ILS", correct: false},
            { text: "GLIDE", correct: false},
            { text: "ALS", correct: true},
            { text: "PAPI", correct: false},
        ]
    },
    {
        questions:"A razão de subida é obtida pelo produto entre:",
        answers: [
            { text: "Elevação padrão do AD e VI", correct: false},
            { text: "Elevação padrão do AD e VA", correct: false},
            { text: "Gradiente de subida e VI ", correct: true},
            { text: "Gradiente de subida e VA", correct: false},
        ]
    },
    {
        questions:"O ângulo formado entre a proa da aeronave e a linha da estação chama-se:",
        answers: [
            { text: "Linha de Posição", correct: false},
            { text: "Rota", correct: false},
            { text: "Marcação Relativa", correct: true},
            { text: "Rumo", correct: false},
        ]
    },
    {
        questions:"Velocidade indicada corrigida para erros de instalação e instrumento é conhecida por:",
        answers: [
            { text: "Supersônica", correct: false},
            { text: "Verdadeira", correct: false},
            { text: "Aerodinâmica", correct: false},
            { text: "Calibrada ", correct: true},
        ]
    },
    {
        questions:" No triângulo de velocidades, o vetor que representa o rumo tem associada a:",
        answers: [
            { text: "VI", correct: false},
            { text: "VV", correct: false},
            { text: "VA", correct: false},
            { text: "VS", correct: false},
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


function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!<br><br>`;
    questions.forEach((question, index) => {
        const selectedAnswer = question.answers.find(answer => answer.text === questions[index].selectedAnswer);
        const isCorrect = selectedAnswer && selectedAnswer.correct;
        const emoji = isCorrect ? "✅" : "❌";
        questionElement.innerHTML += `${index + 1}. ${question.questions} - ${questions[index].selectedAnswer} ${emoji}<br>`;
    });
    nextButton.innerHTML = "Tentar novamente";
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



starQuiz();