
let tela = document.querySelector("body");
let quizzaleatorio;
let quizzSelecionado;
let nperguntas;
let nniveis;
todosquizzes ();
let quizzcriado = [{
	id: 1,
	title: '',
	image: '',
	questions: [],
	levels: []
	}]

function limpatela() {
    tela.innerHTML = `<div class="topo">BuzzQuizz</div>`
}

function todosquizzes () {
  const promise = axios.get("https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes");
  promise.then(selecionaquizz);
}

function selecionaquizz(resposta) {
  quizzaleatorio = resposta.data;
  if (localStorage.length == 0){
    geradortela1_1 ();
  } else {
  geradortela1_2 ();
  }
}

function geradortela1_1 () {
  limpatela();
  tela.innerHTML += `
  <div class="semquizz">
      <div>Você não criou nenhum<br>quizz ainda :(</div>
      <div onclick="criarquizz()"><button>Criar Quizz</button></div>
  </div>
  <div class="quizzes">
    <p>Todos os Quizzes</p>
  </div>`;
  
  for (i = 0; i < 6; i++) {
    let n = parseInt(Math.random()* quizzaleatorio.length);
    let quizzes = document.querySelector(".quizzes")
    quizzes.innerHTML += 
      `<div class="quizz" onclick="gerarQuizz(${quizzaleatorio[n].id})">
          <img src="${quizzaleatorio[n].image}"/>
          <div>${quizzaleatorio[n].title}</div>
      </div>`

      
  }
}

function geradortela1_2 () {
  limpatela();
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
    <div class="quizz" onclick="exibirQuizz()">
      <img
        src="https://thumbs.dreamstime.com/b/fundo-azul-claro-com-brilho-e-c%C3%ADrculos-ilustra%C3%A7%C3%A3o-do-vetor-de-divers%C3%A3o-inverno-para-cartaz-festa-cart%C3%B5es-ano-novo-natal-160774554.jpg"
      />
      <div>Pensa num titulo que ta maneiro</div>
    </div>
    <div class="quizz" onclick="exibirQuizz()">
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
    let n = parseInt(Math.random()* quizzaleatorio.length);
    let quizzes = document.querySelector(".quizzes")
    quizzes.innerHTML += 
      `<div class="quizz" onclick="exibirQuizz()">
          <img src="${quizzaleatorio[n].image}"/>
          <div>${quizzaleatorio[n].title}</div>
      </div>`
  }
}
function criarquizz() {
  limpatela();
  tela.innerHTML += `
  <div class="tela3">
    <div>Comece pelo começo</div>
    <div class="personalizacao">
      <input class="title" type="text" placeholder="     Título do seu quizz">
      <input class="image" type="text" placeholder="     URL da imagem do seu quizz">
      <input class="Npergunta" type="text" placeholder="     Quantidade de perguntas do quizz">
      <input class="Nnivel" type="text" placeholder="     Quantidade de níveis do quizz">
    </div>
  <div onclick="criarperguntas()"><button>Prosseguir pra criar perguntas</button></div>
  </div>`
}

function gerarQuizz(idQuizz){
  const promise = axios.get(`https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/${idQuizz}`)
  promise.then(exibirQuizz)
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
  limpatela();
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
  tela1.innerHTML += `<div onclick="escolhernivel()"><button>Prosseguir pra criar perguntas</button></div>`
}

function escolhernivel() {
  nniveis = Number(nniveis);
  limpatela();

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
  tela1.innerHTML += `<div onclick="sucessocriacao()"><button>Finalizar Quizz</button></div>`;
}
function sucessocriacao() {
  limpatela ();
  tela.innerHTML += `
  <div class="tela3_4">
        <span>Seu quizz está pronto!</span>
        <div class="quizz">
            <img
              src="https://thumbs.dreamstime.com/b/fundo-azul-claro-com-brilho-e-c%C3%ADrculos-ilustra%C3%A7%C3%A3o-do-vetor-de-divers%C3%A3o-inverno-para-cartaz-festa-cart%C3%B5es-ano-novo-natal-160774554.jpg"
            />
            <div>Pensa num titulo que ta maneiro</div>
        </div>
        <div onclick="exibirQuizz()"><button>Acessar Quizz</button></div>
        <div class="botaohome" onclick="todosquizzes()"><button>Voltar pra Home</button></div>
    </div>`
}

function exibirQuizz(resposta){
  let quizz = resposta.data;
  limpatela();
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
    alternativas +=`
    <div class="alternativa">
      <img src=${respostas[i].image}>
      <strong>${respostas[i].text}</strong>
    </div>`
  }
}