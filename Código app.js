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
