const destaqueCards = document.querySelectorAll('.destaque-card');

destaqueCards.forEach(card => {
    card.addEventListener('click', function () {
        const link = this.dataset.link;
        if (link) {
            window.location.href = link;
        }
    });
    card.style.cursor = 'pointer'; // Indica que o card é clicável
});


// Simulação de dados vindo do banco de dados
const carrosData = [
    {
        nome: "PRODUCT 1",
        espec: "ANY ESPECIFIC",
        valor: "Value of product",
        imagem: "images/png-1.svg",
        link: "Produto.html",
    },
    {
        nome: "PRODUCT 2",
        espec: "ANY ESPECIFIC",
        valor: "Value of product",
        imagem: "images/png-1.svg",
        link: "Produto.html",
    },
    {
        nome: "PRODUCT 3",
        espec: "ANY ESPECIFIC",
        valor: "Value of product",
        imagem: "images/png-1.svg",
        link: "Produto.html",
    },
    {
        nome: "PRODUCT 4",
        espec: "ANY ESPECIFIC",
        valor: "Value of product",
        imagem: "images/png-1.svg",
        link: "Produto.html",
    },
    {
        nome: "PRODUCT 5",
        espec: "ANY ESPECIFIC",
        valor: "Value of product",
        imagem: "images/png-1.svg",
        link: "Produto.html",
    },
    {
        nome: "PRODUCT 6",
        espec: "ANY ESPECIFIC",
        valor: "Value of product",
        imagem: "images/png-1.svg",
        link: "Produto.html",
    }
];

const destaquesGrid = document.getElementById('destaquesGrid');

carrosData.forEach(carro => {
    const card = document.createElement('div');
    card.classList.add('destaque-card');
    card.dataset.link = carro.link;
    card.style.cursor = 'pointer';

    const imagem = document.createElement('img');
    imagem.src = carro.imagem;
    imagem.alt = carro.nome;
    card.appendChild(imagem);

    const info = document.createElement('div');
    info.classList.add('card-info');

    const nomeH3 = document.createElement('h3');
    nomeH3.textContent = carro.nome;
    info.appendChild(nomeH3);

    const espec = document.createElement('p');
    espec.textContent = carro.anoKm;
    info.appendChild(espec);

    const valorP = document.createElement('p');
    valorP.textContent = `U$ ${carro.valor}`;
    info.appendChild(valorP);

    card.appendChild(info);
    destaquesGrid.appendChild(card);

    card.addEventListener('click', function () {
        const link = this.dataset.link;
        if (link) {
            window.location.href = link; // Redireciona para o link da pagina do carro
        }
    });
});