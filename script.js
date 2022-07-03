
let tela = document.querySelector("body");
let quizzAleatorio;
let quizzSelecionado;
let nperguntas;
let nniveis;
todosQuizzes();
let quizzCriado = {};
let perguntascriadas = {
  title: '',
  color: '',
  answers: []
};
let niveiscriados = {};
let n;
let quizzes;
let j;

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
  quizzes = document.querySelector(".quizzes");

  for (i = 0; i < 6; i++) {
    n = parseInt(Math.random()* quizzAleatorio.length);
    quizzes.innerHTML += `<div class="quizz" onclick="gerarQuizz(${quizzAleatorio[n].id})">
          <img src="${quizzAleatorio[n].image}"/>
          <div>${quizzAleatorio[n].title}</div>
      </div>`

      
  }
}

function geradorTela1_2 () {
  limpaTela();
  tela.innerHTML += `
  <div class="comquizz">
    <div class="navbar">
      <p>Seus Quizzes</p>
      <div onclick="criarQuizz()">
        <button><ion-icon name="add-sharp"></ion-icon></button>
      </div>
    </div>
    <div class="meuquizz"></div>
  </div>`
  for (let i = 0; i < localStorage.length; i++) {

  let userquizz = localStorage.getItem(`quizz${i}`);
  let quizzproprio = JSON.parse(userquizz);
  
  let meusquizzes = document.querySelector(".meuquizz");
  meusquizzes.innerHTML += `
  <div class="quizz">
    <img src="${quizzproprio.image}"/>
    <div>${quizzproprio.title}</div>
  </div>`
  }

  tela.innerHTML += `
    <div class="quizzes">
      <p>Todos os Quizzes</p>
    </div>`

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
  <div onclick="verificarInformacoesDoQuizz()"><button>Prosseguir pra criar perguntas</button></div>
  </div>`
}

const ehValidoTituloDoQuizz = titulo => titulo.length > 20 && titulo.length < 65;
const ehURLValida = img => new RegExp('^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$','i').test(img);
const ehValidoNumeroDePerguntas = numeroDePerguntas => numeroDePerguntas >= 3;
const ehValidoNumeroDeNiveis = numeroDeNiveis => numeroDeNiveis >= 2;
const ehQuizzValido = (titulo, img, perguntas, niveis) => ehValidoTituloDoQuizz(titulo) && ehURLValida(img) && ehValidoNumeroDePerguntas(perguntas) && ehValidoNumeroDeNiveis(niveis);

function verificarInformacoesDoQuizz(){
  quizzCriado = {
    title: document.querySelector(".title").value,
    image: document.querySelector(".image").value,
    questions: [],
    levels: []
    };
  nperguntas = Number(document.querySelector(".Npergunta").value);
  nniveis = Number(document.querySelector(".Nnivel").value);

  if(ehQuizzValido(quizzCriado.title, quizzCriado.image, nperguntas, nniveis)){
    criarPerguntas();
  } else {
    alert(`Informações de Quizz inválidas!
    Seu quizz precisa ter um título com mais de 20 e menos de 65 caracteres,
    uma URL de imagem válida,
    pelo menos 3 perguntas e 2 níveis`)
    return;
  }
}

function criarPerguntas() {
  limpaTela();
  tela.innerHTML += `
    <div class="tela3_2">
        <span>Crie suas perguntas</span>
    </div>`

  let tela1 = document.querySelector(".tela3_2");

  for (let i = 1; i < nperguntas + 1; i++) {
    tela1.innerHTML +=`
      <div class="id${i}" onclick="perguntaDropdown(this)">
        <div class="caixapergunta">
          <p>Pergunta ${i}</p>
          <p><ion-icon name="pencil-outline"></ion-icon></p>
        </div>
        <div class="caixadepergunta encolhida identify${i}">
            <div class="perguntanumero">
                <p>Pergunta ${i}</p>
                <input type="text" placeholder="   Texto da pergunta">
                <input type="color" placeholder="  Cor de fundo da pergunta">
            </div>
            <div class="caixarespcerta">
                <p>Resposta correta</p>
                <input type="text" placeholder="   Resposta Correta">
                <input type="text" placeholder="   URL da imagem">
            </div>
            <div class="caixaresperrada">
                <p>Respostas incorretas</p>
                <div class="identify1">
                    <input type="text" placeholder="   Resposta incorreta 1">
                    <input type="text" placeholder="   URL da imagem 1">
                </div>
                <div class="identify2">
                    <input type="text" placeholder="   Resposta incorreta 2">
                    <input type="text" placeholder="   URL da imagem 2">
                </div>
                <div class="identify3">
                    <input type="text" placeholder="   Resposta incorreta 3">
                    <input type="text" placeholder="   URL da imagem 3">
                </div>
            </div>
        </div>
      </div>`
  }
  tela1.innerHTML += `<div onclick="verificarInformacoesDaPergunta ()"><button>Prosseguir pra criar níveis</button></div>`

  document.querySelector(".caixapergunta").classList.add('encolhida');
  document.querySelector(".caixadepergunta").classList.remove('encolhida');
}

function perguntaDropdown (Element){
  for (let i = 1; i < nperguntas + 1; i++) {
    if (document.querySelector(`.id${i} .caixapergunta`).classList.contains('encolhida')){
      document.querySelector(`.id${i} .caixapergunta`).classList.remove('encolhida');
    }
    if (document.querySelector(`.id${i} .caixadepergunta`).classList.contains('encolhida') == false){
      document.querySelector(`.id${i} .caixadepergunta`).classList.add('encolhida');
    }
  }
  Element.querySelector(".caixapergunta").classList.add('encolhida');
  Element.querySelector(".caixadepergunta").classList.remove('encolhida');
}

function verificarInformacoesDaPergunta () {
  for(let y = 1; y < (nperguntas + 1); y++) {
    let perguntaLength = document.querySelector(`.identify${y} .perguntanumero input:nth-child(2)`).value.length;
    if (perguntaLength < 20) {
      alert(`Informações de Quizz inválidas! As perguntas do seu quizz precisam ter um texto com mais de 20 caracteres`);
      return;
    } else if (document.querySelector(`.identify${y} .caixarespcerta input:nth-child(2)`).value === '' || document.querySelector(`.identify${y} .caixaresperrada .identify1 input:nth-child(1)`).value === '') {
      alert(`Informações de Quizz inválidas! É necessário que tenha, pelo menos, uma resposta correta e uma incorreta por pergunta`);
      return;
    } else if (!ehURLValida(document.querySelector(`.identify${y} .caixarespcerta input:nth-child(3)`).value) || !ehURLValida(document.querySelector(`.identify${y} .caixaresperrada .identify1 input:nth-child(2)`).value)) {
      alert('Informações de Quizz inválidas! É necessário passar uma URL de imagem válida');
      return;
    }
    if (document.querySelector(`.identify${y} .caixaresperrada .identify2 input:nth-child(1)`).value !== "" && document.querySelector(`.identify${y} .caixaresperrada .identify2 input:nth-child(2)`).value !== "") {
      !ehURLValida(document.querySelector(`.identify${y} .caixaresperrada .identify2 input:nth-child(2)`));
    }
    if (document.querySelector(`.identify${y} .caixaresperrada .identify3 input:nth-child(1)`).value !== "" && document.querySelector(`.identify${y} .caixaresperrada .identify3 input:nth-child(2)`).value !== "") {
      ehURLValida(document.querySelector(`.identify${y} .caixaresperrada .identify3 input:nth-child(2)`));
    }
  }
  salvaPerguntas();
}

function salvaPerguntas() {
  for(let y = 1; y < (nperguntas + 1); y++) {
      perguntascriadas = {
      title: `${document.querySelector(`.identify${y} .perguntanumero input:nth-child(2)`).value}`,
      color: `${document.querySelector(`.identify${y} .perguntanumero input:nth-child(3)`).value}`,
      answers: [
        {
          text: `${document.querySelector(`.identify${y} .caixarespcerta input:nth-child(2)`).value}`,
          image: `${document.querySelector(`.identify${y} .caixarespcerta input:nth-child(3)`).value}`,
          isCorrectAnswer: true
        },
        {
          text: `${document.querySelector(`.identify${y} .caixaresperrada .identify1 input:nth-child(1)`).value}`,
          image: `${document.querySelector(`.identify${y} .caixaresperrada .identify1 input:nth-child(2)`).value}`,
          isCorrectAnswer: false
        }
      ]
    }
    if (document.querySelector(`.identify${y} .caixaresperrada .identify2 input:nth-child(1)`).value !== "" && document.querySelector(`.identify${y} .caixaresperrada .identify2 input:nth-child(2)`).value !== "") {
     let resposta3 = {
        text: `${document.querySelector(`.identify${y} .caixaresperrada .identify2 input:nth-child(1)`).value}`,
        image: `${document.querySelector(`.identify${y} .caixaresperrada .identify2 input:nth-child(2)`).value}`,
        isCorrectAnswer: false
      }
      perguntascriadas.answers.push(resposta3);
    }
    if (document.querySelector(`.identify${y} .caixaresperrada .identify3 input:nth-child(1)`).value !== "" && document.querySelector(`.identify${y} .caixaresperrada .identify3 input:nth-child(2)`).value !== "") {
      let resposta4 = {
        text: `${document.querySelector(`.identify${y} .caixaresperrada .identify3 input:nth-child(1)`).value}`,
        image: `${document.querySelector(`.identify${y} .caixaresperrada .identify3 input:nth-child(2)`).value}`,
        isCorrectAnswer: false
      }
      perguntascriadas.answers.push(resposta4);
    }
    quizzCriado.questions.push(perguntascriadas);
  }
  escolherNivel()
}

function escolherNivel() {
  limpaTela();

  tela.innerHTML += `
      <div class="tela3_3">
        <span>Agora, decida os níveis</span>
      </div>`;
  
  let tela1 = document.querySelector(".tela3_3");

  for (let z = 1; z < (nniveis+1); z++){
    tela1.innerHTML +=`
    <div class="id${z}" onclick="nivelDropdown(this)">
        <div class="caixapergunta">
          <p>Nível ${z}</p>
          <p><ion-icon name="pencil-outline"></ion-icon></p>
        </div>
      <div class="caixaniveis encolhida identify${z}">
            <div class="niveis">
                <div>Nível ${z}</div>
                <input type="text" placeholder="   Título do nível">
                <input type="text" placeholder="   % de acerto mínima">
                <input type="text" placeholder="   URL da imagem do nível">
                <input type="text" placeholder="   Descrição do nível">
            </div>
      </div>
    </div>`
  }
  tela1.innerHTML += `<div onclick="verificarInformacoesDoNivel()"><button>Finalizar Quizz</button></div>`;

  document.querySelector(".caixapergunta").classList.add('encolhida');
  document.querySelector(".caixaniveis").classList.remove('encolhida');
}

function nivelDropdown (Element){
  for (let i = 1; i < nniveis + 1; i++) {
    if (document.querySelector(`.id${i} .caixapergunta`).classList.contains('encolhida')){
      document.querySelector(`.id${i} .caixapergunta`).classList.remove('encolhida');
    }
    if (document.querySelector(`.id${i} .caixaniveis`).classList.contains('encolhida') == false){
      document.querySelector(`.id${i} .caixaniveis`).classList.add('encolhida');
    }
  }
  Element.querySelector(".caixapergunta").classList.add('encolhida');
  Element.querySelector(".caixaniveis").classList.remove('encolhida');
}

function verificarInformacoesDoNivel (){
  let contador = 0;
  for (let l = 1; l < nniveis + 1; l++) {
    let titleLength = document.querySelector(`.identify${l} .niveis input:nth-child(2)`).value.length;
    let textlength = document.querySelector(`.identify${l} .niveis input:nth-child(5)`).value.length;
    if (titleLength < 10) {
      alert('Informações de Quizz inválidas! Os títulos dos níveis precisam ter um texto com mais de 10 caracteres');
      return;
    } else if (textlength < 30) {
      alert('Informações de Quizz inválidas! A descrição dos seus níveis precisam ter um texto com mais de 30 caracteres');
      return;
    } else if (!ehURLValida(document.querySelector(`.identify${l} .niveis input:nth-child(4)`).value)) {
      alert('Informações de Quizz inválidas! É necessário passar uma URL de imagem válida');
      return;
    } else if (document.querySelector(`.identify${l} .niveis input:nth-child(3)`).value < 0 || document.querySelector(`.identify${l} .niveis input:nth-child(3)`).value > 100) {
      alert('Informações de Quizz inválidas! A % de acerto mínima deve ser um número entre 0 e 100');
      return;
    } else if (document.querySelector(`.identify${l} .niveis input:nth-child(3)`).value == 0) {
      contador++
    }
  }
  if (contador > 0) {
    salvaNiveis();
  } else {
    alert('Informações de Quizz inválidas! É obrigatório existir pelo menos 1 nível cuja % de acerto mínima seja 0%')
  }
}

function salvaNiveis (){
  for (let l = 1; l < nniveis + 1; l++) {
    niveiscriados = {
      title: `${document.querySelector(`.identify${l} .niveis input:nth-child(2)`).value}`,
      image: `${document.querySelector(`.identify${l} .niveis input:nth-child(4)`).value}`,
      text: `${document.querySelector(`.identify${l} .niveis input:nth-child(5)`).value}`,
      minValue: `${document.querySelector(`.identify${l} .niveis input:nth-child(3)`).value}`
    }
    quizzCriado.levels.push(niveiscriados);
  }
  enviaQuizz()
}

function enviaQuizz() {
  j = localStorage.length;
  dadosSerializados = JSON.stringify(quizzCriado);
  localStorage.setItem(`quizz${j}`, dadosSerializados);
  //let promise = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", quizzCriado);
  //promise.then(sucessoCriacao);
  //promise.catch(deuRuim)
  sucessoCriacao();
}

function deuRuim () {
  alert("deu ruim pra salvar a página, reinicia a página");
}
function sucessoCriacao() {
  limpaTela ();
  tela.innerHTML += `
  <div class="tela3_4">
        <span>Seu quizz está pronto!</span>
        <div class="quizz">
            <img
              src="${quizzCriado.image}"
            />
            <div>${quizzCriado.title}</div>
        </div>
        <div onclick="gerarQuizz()"><button>Acessar Quizz</button></div>
        <div class="botaohome" onclick="todosQuizzes()"><button>Voltar pra Home</button></div>
    </div>`
}

function gerarQuizz(idQuizz){
  const promise = axios.get(`https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/${idQuizz}`)
  promise.then(exibirQuizz)
}

let niveisDoQuizz;
let idDoQuizz;
function exibirQuizz(resposta){
  let quizz = resposta.data;
  idDoQuizz = quizz.id;
  limpaTela();
  tela.innerHTML += `
  <div class="titulo-quizz">
    <img src=${quizz.image}>
    <h2>${quizz.title}</h2>
  </div>
  <div class="perguntas">
  </div>`
  gerarPerguntas(quizz.questions);
  niveisDoQuizz = quizz.levels
}

let alternativas = '';
let perguntasDoQuizz;

function gerarPerguntas(perguntas){
  perguntasDoQuizz = perguntas.length;
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

let contadorRespostasCorretas = 0

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
  if(alternativa.classList.contains('correta')){
    contadorRespostasCorretas += 1;
  }
  alternativa.parentNode.parentNode.classList.add('respondida');
  setTimeout(rolarParaProximaPergunta, 2000)
}

function rolarParaProximaPergunta(){
  let perguntas = document.querySelectorAll('.pergunta');
    for(let i = 0; i < perguntas.length; i++){
      if(!perguntas[i].classList.contains('respondida')){
        perguntas[i].scrollIntoView();
        return
      }
    }
    gerarNivel(niveisDoQuizz);
}

function gerarNivel(niveis){
  let acertividade = ((contadorRespostasCorretas/perguntasDoQuizz)*100).toFixed(0);
  console.log(acertividade);
  console.log('contador:', contadorRespostasCorretas);
  console.log('perguntas:', perguntasDoQuizz);
  let pontuacao = 0;
  let nivel = {
    titulo: '',
    img: '',
    descricao: ''
  };
  for(let i = 0; i < niveis.length; i++){
    if(acertividade >= niveis[i].minValue && niveis[i].minValue >= pontuacao){
      nivel = {
        titulo: niveis[i].title,
        img: niveis[i].image,
        descricao: niveis[i].text
      }
      pontuacao = niveis[i].minValue;
    }
  }
  contadorRespostasCorretas = 0;
  finalizarQuizz(nivel)
}

function finalizarQuizz(nivel){
  tela.innerHTML += `
  <div class="quizz-finalizado">
      <div class="nivel-quizz">
          <div class="titulo-nivel">
              <h2>${nivel.titulo}</h2>
          </div>
          <div class="img-e-descricao">
              <img src="${nivel.img}">
              <div class="descricao-nivel">
                  <p>${nivel.descricao}</p>
              </div>
          </div>
      </div>
      <button class="reiniciar-quizz" onclick="gerarQuizz(${idDoQuizz})">Reiniciar Quizz</button>
      <button class="voltar-para-home" onclick="todosQuizzes()">Voltar para home</button>
  </div>`;
  const final = document.querySelector('.quizz-finalizado');
  final.scrollIntoView();
}