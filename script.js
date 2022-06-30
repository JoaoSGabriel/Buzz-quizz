
let tela = document.querySelector("body");
let quizzaleatorio;
let quizzSelecionado;
todosquizzes ();

function limpatela() {
    tela.innerHTML = `<div class="topo">BuzzQuizz</div>`
}

function todosquizzes () {
  const promise = axios.get("https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes");
  promise.then(selecionaquizz);
}

function selecionaquizz(resposta) {
  quizzaleatorio = resposta.data;
  geradortela1_1();
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
  tela.innerHTML += `
  <div class="comquizz">
    <div class="navbar">
      <p>Seus Quizzes</p>
      <div onclick="criarquizz()">
        <button><ion-icon name="add-sharp"></ion-icon></button>
      </div>
    </div>
    <div class="quizz" onclick="exibirquizz()">
      <img
        src="https://thumbs.dreamstime.com/b/fundo-azul-claro-com-brilho-e-c%C3%ADrculos-ilustra%C3%A7%C3%A3o-do-vetor-de-divers%C3%A3o-inverno-para-cartaz-festa-cart%C3%B5es-ano-novo-natal-160774554.jpg"
      />
      <div>Pensa num titulo que ta maneiro</div>
    </div>
    <div class="quizz" onclick="exibirquizz()">
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
      `<div class="quizz" onclick="exibirquizz()">
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
      <input type="text" placeholder="     Título do seu quizz">
      <input type="text" placeholder="     URL da imagem do seu quizz">
      <input type="text" placeholder="     Quantidade de perguntas do quizz">
      <input type="text" placeholder="     Quantidade de níveis do quizz">
    </div>
  <div onclick="criarperguntas()"><button>Prosseguir pra criar perguntas</button></div>
  </div>`
}

function gerarQuizz(idQuizz){
  const promise = axios.get(`https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/${idQuizz}`)
  promise.then(exibirQuizz)
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