console.log("app.js carregou!");
const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        resposta: "JavaScript é uma linguagem de programação usada para criar interatividade em sites."
    },
    {
        pergunta: "O que significa HTML?",
        resposta: "HTML significa HyperText Markup Language."
    },
    {
        pergunta: "Para que serve o CSS?",
        resposta: "O CSS é usado para estilizar e formatar páginas web."
    }
];

const container = document.getElementById("container");

perguntas.forEach(item => {
    const cartao = document.createElement("article");
    cartao.className = "cartao";

    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <div class="cartao__conteudo__pergunta">
                <p>${item.pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${item.resposta}</p>
            </div>
        </div>
    `;

    cartao.addEventListener("click", () => {
        cartao.classList.toggle("virado");
    });

    container.appendChild(cartao);
});
