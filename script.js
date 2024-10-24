const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1 + 1 =?",
        alternativas: [
            {
                texto: "2",
                afirmacao: "certo"
            },
            {
                texto: "3",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "7*7",
        alternativas: [
            {
                texto: "49",
                afirmacao: "certo"
            },
            {
                texto: "56",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "6*6-6",
        alternativas: [
            {
                texto: "30.",
                afirmacao: "certo"
            },
            {
                texto: "42",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "40*4000",
        alternativas: [
            {
                texto: "160000",
                afirmacao: "certo"
            },const caixaPrincipal = document.querySelector(".caixa-principal");
            const caixaPerguntas = document.querySelector(".caixa-perguntas");
            const caixaAlternativas = document.querySelector(".caixa-alternativas");
            const caixaResultado = document.querySelector(".caixa-resultado");
            const textoResultado = document.querySelector(".texto-resultado");
            
            const perguntas = [
                {
                    enunciado: "1 + 1 =?",
                    alternativas: [
                        {
                            texto: "2",
                            afirmacao: "certo"
                        },
                        {
                            texto: "3",
                            afirmacao: "errado"
                        }
                    ]
                },
                {
                    enunciado: "7*7",
                    alternativas: [
                        {
                            texto: "49",
                            afirmacao: "certo"
                        },
                        {
                            texto: "56",
                            afirmacao: "errado"
                        }
                    ]
                },
                {
                    enunciado: "6*6-6",
                    alternativas: [
                        {
                            texto: "30.",
                            afirmacao: "certo"
                        },
                        {
                            texto: "42",
                            afirmacao: "errado"
                        }
                    ]
                },
                {
                    enunciado: "40*4000",
        alternativas: [
            {
                texto: "8",
                afirmacao: "errado"
            },
            {
                texto: "-8",
                afirmacao: "certo"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
