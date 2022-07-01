
let tela = document.querySelector("body");
let quizzAleatorio;
let quizzSelecionado;
let nperguntas;
let nniveis;
todosQuizzes();
let quizzcriado = [{}];
let perguntascriadas = [{}];

function limpaTela() {
    tela.innerHTML = `<div class="topo">BuzzQuizz</div>`
}

function todosQuizzes () {
  const promise = axios.get("https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes");
  promise.then(selecionaQuizz);
}

function selecionaQuizz(resposta) {
  quizzAleatorio = resposta.data;
  if (localStorage.length == 0){
    geradorTela1_1 ();
  } else {
  geradorTela1_2 ();
  }
}

function geradorTela1_1 () {
  limpaTela();
  tela.innerHTML += `
  <div class="semquizz">
      <div>Você não criou nenhum<br>quizz ainda :(</div>
      <div onclick="criarQuizz()"><button>Criar Quizz</button></div>
  </div>
  <div class="quizzes">
    <p>Todos os Quizzes</p>
  </div>`;
  
  for (i = 0; i < 6; i++) {
    let n = parseInt(Math.random()* quizzAleatorio.length);
    let quizzes = document.querySelector(".quizzes")
    quizzes.innerHTML += 
      `<div class="quizz" onclick="gerarQuizz(${quizzAleatorio[n].id})">
          <img src="${quizzAleatorio[n].image}"/>
          <div>${quizzAleatorio[n].title}</div>
      </div>`      
  }
}

function geradorTela1_2 () {
  limpaTela();
  //let userquizz = localstorage.getItem("quizz");
  //let quizzproprio = JSON.parse(userquizz);
  tela.innerHTML += `
  <div class="comquizz">
    <div class="navbar">
      <p>Seus Quizzes</p>
      <div onclick="criarquizz()">
        <button><ion-icon name="add-sharp"></ion-icon></button>
      </div>
    </div>
    <div class="quizz" onclick="gerarQuizz()">
      <img
        src="https://thumbs.dreamstime.com/b/fundo-azul-claro-com-brilho-e-c%C3%ADrculos-ilustra%C3%A7%C3%A3o-do-vetor-de-divers%C3%A3o-inverno-para-cartaz-festa-cart%C3%B5es-ano-novo-natal-160774554.jpg"
      />
      <div>Pensa num titulo que ta maneiro</div>
    </div>
    <div class="quizz" onclick="gerarQuizz()">
      <img
        src="https://thumbs.dreamstime.com/b/fundo-azul-claro-com-brilho-e-c%C3%ADrculos-ilustra%C3%A7%C3%A3o-do-vetor-de-divers%C3%A3o-inverno-para-cartaz-festa-cart%C3%B5es-ano-novo-natal-160774554.jpg"
      />
      <div>Pensa num titulo que ta maneiro</div>
    </div>
  </div>
  <div class="quizzes">
    <p>Todos os Quizzes</p>
  </div>`

  for (i = 0; i < 6; i++) {
    let n = parseInt(Math.random()* quizzAleatorio.length);
    let quizzes = document.querySelector(".quizzes")
    quizzes.innerHTML += 
      `<div class="quizz" onclick="gerarQuizz()">
          <img src="${quizzAleatorio[n].image}"/>
          <div>${quizzAleatorio[n].title}</div>
      </div>`
  }
}
function criarQuizz() {
  limpaTela();
  tela.innerHTML += `
  <div class="tela3">
    <div>Comece pelo começo</div>
    <div class="personalizacao">
      <input class="title" type="text" placeholder="     Título do seu quizz">
      <input class="image" type="text" placeholder="     URL da imagem do seu quizz">
      <input class="Npergunta" type="text" placeholder="     Quantidade de perguntas do quizz">
      <input class="Nnivel" type="text" placeholder="     Quantidade de níveis do quizz">
    </div>
  <div onclick="criarPerguntas()"><button>Prosseguir pra criar perguntas</button></div>
  </div>`
}

function criarperguntas() {
  quizzcriado =  [{
    id: 1,
    title: `${document.querySelector(".title").value}`,
    image: `${document.querySelector(".image").value}`,
    questions: [],
    levels: []
    }];
  nperguntas = document.querySelector(".Npergunta").value;
  nniveis = document.querySelector(".Nnivel").value
  nperguntas = Number(nperguntas);
  limpaTela();
  tela.innerHTML += `
    <div class="tela3_2">
        <span>Crie suas perguntas</span>
    </div>`

  let tela1 = document.querySelector(".tela3_2");

  for (let i = 1; i < nperguntas + 1; i++) {
    tela1.innerHTML +=`
        <div class="caixadepergunta" id="${i}">
            <div class="perguntanumero">
                <p>Pergunta ${i}</p>
                <input type="text" placeholder="   Texto da pergunta">
                <input type="text" placeholder="   Cor de fundo da pergunta">
            </div>
            <div class="caixarespcerta">
                <p>Resposta correta</p>
                <input type="text" placeholder="   Resposta Correta">
                <input type="text" placeholder="   URL da imagem">
            </div>
            <div class="caixaresperrada">
                <p>Respostas incorretas</p>
                <div>
                    <input type="text" placeholder="   Resposta incorreta 1">
                    <input type="text" placeholder="   URL da imagem 1">
                </div>
                <div>
                    <input type="text" placeholder="   Resposta incorreta 2">
                    <input type="text" placeholder="   URL da imagem 2">
                </div>
                <div>
                    <input type="text" placeholder="   Resposta incorreta 3">
                    <input type="text" placeholder="   URL da imagem 3">
                </div>
            </div>
        </div>`
  }
  tela1.innerHTML += `<div onclick="escolherNivel()"><button>Prosseguir pra criar perguntas</button></div>`
}

function criaPerguntas () {

  for(let y = 0; y < nperguntas; y++) {
    perguntascriadas = {
      title: "",
      color: "",
      answers: [
        {
          text: "",
          image: "",
          isCorrectAnswer: true
        },
        {
          text: "",
          image: "",
          isCorrectAnswer: false
        },
        {
          text: "",
          image: "",
          isCorrectAnswer: false
        },
        {
          text: "",
          image: "",
          isCorrectAnswer: false
        }
      ]
    }
    quizzcriado.questions.push(perguntascriadas)
  }
}

function escolherNivel() {
  nniveis = Number(nniveis);
  limpaTela();

  tela.innerHTML += `
      <div class="tela3_3">
        <span>Agora, decida os níveis</span>
      </div>`;
  
  let tela1 = document.querySelector(".tela3_3");

  for (let z = 1; z < (nniveis+1); z++){
    tela1.innerHTML +=`
    <div class="caixaniveis" id="${z}">
            <div class="niveis">
                <div>Nível ${z}</div>
                <input type="text" placeholder="   Título do nível">
                <input type="text" placeholder="   % de acerto mínima">
                <input type="text" placeholder="   URL da imagem do nível">
                <input type="text" placeholder="   Descrição do nível">
            </div>
        </div>`
  }
  tela1.innerHTML += `<div onclick="sucessoCriacao()"><button>Finalizar Quizz</button></div>`;
}

function sucessoCriacao() {
  limpaTela ();
  tela.innerHTML += `
  <div class="tela3_4">
        <span>Seu quizz está pronto!</span>
        <div class="quizz">
            <img
              src="https://thumbs.dreamstime.com/b/fundo-azul-claro-com-brilho-e-c%C3%ADrculos-ilustra%C3%A7%C3%A3o-do-vetor-de-divers%C3%A3o-inverno-para-cartaz-festa-cart%C3%B5es-ano-novo-natal-160774554.jpg"
            />
            <div>Pensa num titulo que ta maneiro</div>
        </div>
        <div onclick="gerarQuizz()"><button>Acessar Quizz</button></div>
        <div class="botaohome" onclick="todosquizzes()"><button>Voltar pra Home</button></div>
    </div>`
}

function gerarQuizz(idQuizz){
  const promise = axios.get(`https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/${idQuizz}`)
  promise.then(exibirQuizz)
}

function exibirQuizz(resposta){
  let quizz = resposta.data;
  limpaTela();
  tela.innerHTML += `
  <div class="titulo-quizz">
    <img src=${quizz.image}>
    <h2>${quizz.title}</h2>
  </div>
  <div class="perguntas">
  </div>`
  gerarPerguntas(quizz.questions);
}

let alternativas = '';

function gerarPerguntas(perguntas){
  perguntas.sort(() => Math.random() - 0.5);
  let questoes = tela.querySelector('.perguntas');
  for (let i = 0; i < perguntas.length; i++){
    gerarRespostas(perguntas[i].answers);
    questoes.innerHTML += `
      <div class="pergunta">
        <div class="titulo">
            <h3>${perguntas[i].title}</h3>
        </div>
        <div class="alternativas">
          ${alternativas}
        </div>
      </div>`
      alternativas = '';
  }
}

function gerarRespostas(respostas){
  respostas.sort(() => Math.random() - 0.5);
  for(let i = 0; i < respostas.length; i++){
    if(respostas[i].isCorrectAnswer){
      alternativas +=`
      <div class="alternativa correta" onclick="selecionarAlternativa(this)">
      <img src=${respostas[i].image}>
      <strong>${respostas[i].text}</strong>
      </div>`
    } else {
      alternativas +=`
      <div class="alternativa errada" onclick="selecionarAlternativa(this)">
      <img src=${respostas[i].image}>
      <strong>${respostas[i].text}</strong>
      </div>`
    }
  }
}

function selecionarAlternativa(alternativa){
  let alternativasDessaPergunta = alternativa.parentNode.querySelectorAll('.alternativa');
  for(let i = 0; i < alternativasDessaPergunta.length; i++){
    if(alternativasDessaPergunta[i].classList.contains('selecionada')){
      return
    }
  }
  alternativa.classList.add('selecionada');
  for(let i = 0; i < alternativasDessaPergunta.length; i++){
    let textoDaAlternativa = alternativasDessaPergunta[i].querySelector('strong')
    if(!alternativasDessaPergunta[i].classList.contains('selecionada')){
      alternativasDessaPergunta[i].classList.add('nao-selecionada');
    }
    if(alternativasDessaPergunta[i].classList.contains('correta')){
      textoDaAlternativa.classList.add('texto-verde');
    } else {
      textoDaAlternativa.classList.add('texto-vermelho');
    }
  }
}