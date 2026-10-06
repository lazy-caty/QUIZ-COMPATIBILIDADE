// ========================================
// PERGUNTAS
// ========================================

const perguntas = [

    {
        pergunta: "Quando você recebe um problema, o que mais te dá vontade de fazer?",

        opcoes: [
            {
                texto: "Criar uma solução usando código",
                area: "desenvolvimento"
            },
            {
                texto: "Pensar em como deixar aquilo mais fácil e agradável para as pessoas",
                area: "ux"
            },
            {
                texto: "Descobrir como o problema aconteceu e como evitar que aconteça novamente",
                area: "seguranca"
            },
            {
                texto: "Analisar informações para encontrar padrões",
                area: "dados"
            },
            {
                texto: "Entender a estrutura por trás do problema e fazê-la funcionar",
                area: "infra"
            }
        ]
    },

    {
        pergunta: "Qual atividade parece mais interessante para você?",

        opcoes: [
            {
                texto: "Criar um aplicativo ou site",
                area: "desenvolvimento"
            },
            {
                texto: "Criar uma interface bonita e fácil de usar",
                area: "ux"
            },
            {
                texto: "Proteger sistemas contra ataques",
                area: "seguranca"
            },
            {
                texto: "Trabalhar com dados e descobrir tendências",
                area: "dados"
            },
            {
                texto: "Configurar servidores e serviços na nuvem",
                area: "infra"
            }
        ]
    },

    {
        pergunta: "O que mais combina com você?",

        opcoes: [
            {
                texto: "Lógica e resolução de problemas",
                area: "desenvolvimento"
            },
            {
                texto: "Criatividade e empatia",
                area: "ux"
            },
            {
                texto: "Investigação e atenção aos detalhes",
                area: "seguranca"
            },
            {
                texto: "Curiosidade e análise",
                area: "dados"
            },
            {
                texto: "Organização e interesse por tecnologia",
                area: "infra"
            }
        ]
    },

    {
        pergunta: "Você entrou em uma equipe de tecnologia. Qual tarefa escolheria?",

        opcoes: [
            {
                texto: "Programar uma nova funcionalidade",
                area: "desenvolvimento"
            },
            {
                texto: "Melhorar a experiência dos usuários",
                area: "ux"
            },
            {
                texto: "Encontrar vulnerabilidades no sistema",
                area: "seguranca"
            },
            {
                texto: "Analisar dados para ajudar a empresa a tomar decisões",
                area: "dados"
            },
            {
                texto: "Garantir que os sistemas estejam funcionando corretamente",
                area: "infra"
            }
        ]
    },

    {
        pergunta: "Qual dessas conquistas deixaria você mais satisfeito?",

        opcoes: [
            {
                texto: "Eu criei esse sistema do zero.",
                area: "desenvolvimento"
            },
            {
                texto: "Eu fiz isso ficar muito mais fácil de usar.",
                area: "ux"
            },
            {
                texto: "Eu encontrei uma falha antes que alguém pudesse explorá-la.",
                area: "seguranca"
            },
            {
                texto: "Eu descobri algo importante analisando os dados.",
                area: "dados"
            },
            {
                texto: "Eu fiz toda essa estrutura funcionar sem problemas.",
                area: "infra"
            }
        ]
    }

];


// ========================================
// INFORMAÇÕES DAS ÁREAS
// ========================================

const areas = {

    desenvolvimento: {
        titulo: "Desenvolvimento de Software",
        icone: "💻",

        descricao:
            "Você demonstra afinidade com lógica, criação e resolução de problemas. Desenvolvimento pode ser uma área interessante para você explorar.",

        perfil:
            "Programadores e desenvolvedores criam sites, aplicativos, sistemas e outras soluções utilizando linguagens de programação."
    },

    ux: {
        titulo: "UX/UI Design",
        icone: "🎨",

        descricao:
            "Você parece gostar de criatividade, pessoas e de encontrar maneiras de tornar a tecnologia mais simples e agradável.",

        perfil:
            "Profissionais de UX/UI trabalham para criar experiências digitais intuitivas, funcionais e agradáveis para os usuários."
    },

    seguranca: {
        titulo: "Cibersegurança",
        icone: "🔐",

        descricao:
            "Seu perfil demonstra curiosidade, atenção aos detalhes e interesse em investigação e proteção.",

        perfil:
            "Profissionais de cibersegurança trabalham para proteger sistemas, redes e informações contra ameaças e ataques."
    },

    dados: {
        titulo: "Dados e Inteligência Artificial",
        icone: "📊",

        descricao:
            "Você demonstra curiosidade e interesse em analisar informações, encontrar padrões e descobrir novas possibilidades.",

        perfil:
            "Profissionais de dados trabalham com informações para gerar análises, previsões e insights que ajudam na tomada de decisões."
    },

    infra: {
        titulo: "Infraestrutura e Cloud",
        icone: "☁️",

        descricao:
            "Você parece gostar de organização, tecnologia e de entender como os sistemas funcionam por trás das telas.",

        perfil:
            "Profissionais de infraestrutura e cloud trabalham com servidores, redes, serviços em nuvem e ambientes que mantêm sistemas funcionando."
    }

};


// ========================================
// VARIÁVEIS
// ========================================

let perguntaAtual = 0;

let pontuacao = {
    desenvolvimento: 0,
    ux: 0,
    seguranca: 0,
    dados: 0,
    infra: 0
};


// ========================================
// ELEMENTOS HTML
// ========================================

const telaInicial =
    document.getElementById("tela-inicial");

const telaQuiz =
    document.getElementById("tela-quiz");

const telaResultado =
    document.getElementById("tela-resultado");

const btnIniciar =
    document.getElementById("btn-iniciar");

const btnReiniciar =
    document.getElementById("btn-reiniciar");

const contador =
    document.getElementById("contador");

const progresso =
    document.getElementById("progresso");

const pergunta =
    document.getElementById("pergunta");

const opcoes =
    document.getElementById("opcoes");

const resultadoTitulo =
    document.getElementById("resultado-titulo");

const resultadoDescricao =
    document.getElementById("resultado-descricao");

const resultadoPerfil =
    document.getElementById("resultado-perfil");

const iconeResultado =
    document.getElementById("icone-resultado");


// ========================================
// INICIAR QUIZ
// ========================================

btnIniciar.addEventListener("click", function () {

    telaInicial.classList.remove("ativa");

    telaQuiz.classList.add("ativa");

    perguntaAtual = 0;

    mostrarPergunta();

});


// ========================================
// MOSTRAR PERGUNTA
// ========================================

function mostrarPergunta() {

    const perguntaAtualObj =
        perguntas[perguntaAtual];

    contador.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    const porcentagem =
        ((perguntaAtual + 1) / perguntas.length) * 100;

    progresso.style.width =
        `${porcentagem}%`;

    pergunta.textContent =
        perguntaAtualObj.pergunta;

    opcoes.innerHTML = "";


    // Criar os botões das alternativas

    perguntaAtualObj.opcoes.forEach(function (opcao) {

        const botao =
            document.createElement("button");

        botao.classList.add("opcao");

        botao.textContent =
            opcao.texto;


        botao.addEventListener("click", function () {

            // Adiciona ponto para a área escolhida

            pontuacao[opcao.area]++;

            // Verifica se existem outras perguntas

            if (
                perguntaAtual <
                perguntas.length - 1
            ) {

                perguntaAtual++;

                mostrarPergunta();

            } else {

                mostrarResultado();

            }

        });


        opcoes.appendChild(botao);

    });

}


// ========================================
// MOSTRAR RESULTADO
// ========================================

function mostrarResultado() {

    telaQuiz.classList.remove("ativa");

    telaResultado.classList.add("ativa");


    // Encontrar a maior pontuação

    let areaVencedora = "desenvolvimento";

    let maiorPontuacao = 0;


    for (
        const area in pontuacao
    ) {

        if (
            pontuacao[area] >
            maiorPontuacao
        ) {

            maiorPontuacao =
                pontuacao[area];

            areaVencedora =
                area;

        }

    }


    // Pegar informações da área

    const resultado =
        areas[areaVencedora];


    // Mostrar resultado

    iconeResultado.textContent =
        resultado.icone;

    resultadoTitulo.textContent =
        resultado.titulo;

    resultadoDescricao.textContent =
        resultado.descricao;

    resultadoPerfil.textContent =
        resultado.perfil;

}


// ========================================
// REINICIAR QUIZ
// ========================================

btnReiniciar.addEventListener("click", function () {

    // Zerar pontuação

    pontuacao = {
        desenvolvimento: 0,
        ux: 0,
        seguranca: 0,
        dados: 0,
        infra: 0
    };


    perguntaAtual = 0;


    telaResultado.classList.remove("ativa");

    telaInicial.classList.add("ativa");

});