document.addEventListener("DOMContentLoaded", function() {
    const prova01Button = document.getElementById("prova-01");
    const prova02Button = document.getElementById("prova-02");

    prova01Button.addEventListener("click", function() {
        // Redirecionar para a página da Prova 01 (substitua "prova01.html" pelo nome do arquivo da primeira prova).
        window.location.href = "../Simulado/HTML/ProvaN1.html";
    });

    prova02Button.addEventListener("click", function() {
        // Redirecionar para a página da Prova 02 (substitua "prova02.html" pelo nome do arquivo da segunda prova).
        window.location.href = "../Simulado/HTML/ProvaN1.html";
    });
});
