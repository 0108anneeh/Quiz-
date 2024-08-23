const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");

const perguntas = [
    {
        enunciado: "Você faz uso da tecnologia com frequência?",
        alternativas: [
            "Sim.",
            "Não."
        ]
    },
    {
        enunciado: "Em sua visão, nos dias atuais, é possível viver bem sem fazer uso de tecnologias?",
        alternativas: [
            "Sim.",
            "Não."
        ]
    },
    {
        enunciado: "Você considera o avanço dos aparelhos tecnologicos como algo positivo?",
        alternativas: [
            "Sim.",
            "Não."

        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa;
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }
  const perguntas = [
    {
      enunciado:
        "Assim que saiu da escola você se depara com uma nova tecnologia”
      alternativas: [
        {
          texto: "Isso é assustador!",
          afirmacao: "afirmação",
        },
        {
          texto: "Isso é maravilhoso!",
          afirmacao: "afirmação",
        },
      ],
    },
  ]
  function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)){
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }
  function respostaSelecionada(opcaoSelecionada){
    const afirmações = opcaoSelecionada.afirmações;
    historiaFinal += afirmações +" " ;
    atual++;
    mostraPergunta()
  }

  function mostraResultado(){
    caixaPerguntas.textContent = "Em 2048...";
    textoResultado.textContent = historiaFinal
    caixaAlternativas.textContent = "";
  }

mostraPergunta();