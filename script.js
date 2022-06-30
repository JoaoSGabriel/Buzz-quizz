
let tela = document.querySelector("body");
let quizzaleatorio;
todosquizzes ();

function limpatela() {
    tela.innerHTML = `<div class="topo">BuzzQuizz</div>`
}

function todosquizzes () {
  const promisse = axios.get("https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes");
  promisse.then(selecionaquizz);
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
    let cadaquizz = document.querySelector(".quizzes")
    cadaquizz.innerHTML += 
      `<div class="quizz" onclick="exibirquizz()">
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
    let cadaquizz = document.querySelector(".quizzes")
    cadaquizz.innerHTML += 
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
      <input class="title" type="text" placeholder="     Título do seu quizz">
      <input class="image" type="text" placeholder="     URL da imagem do seu quizz">
      <input class="Npergunta" type="text" placeholder="     Quantidade de perguntas do quizz">
      <input class="Nnivel" type="text" placeholder="     Quantidade de níveis do quizz">
    </div>
  <div onclick="criarperguntas()"><button>Prosseguir pra criar perguntas</button></div>
  </div>`
}

function criarperguntas() {
  limpatela();
  tela.innerHTML += `
  <div class="tela3_2">
        <span>Crie suas perguntas</span>
        <div class="caixadepergunta">
            <div class="perguntanumero">
                <p>Pergunta 1</p>
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
        </div>
        <div class="caixadepergunta">
            <div class="perguntanumero">
                <p>Pergunta 1</p>
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
        </div>
        <div class="caixadepergunta">
            <div class="perguntanumero">
                <p>Pergunta 1</p>
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
        </div>
        <div onclick="escolhernivel()"><button>Prosseguir pra criar perguntas</button></div>
    </div>`
}

function escolhernivel() {
  limpatela();
  tela.innerHTML += `
  <div class="tela3_3">
        <span>Agora, decida os níveis</span>
        <div class="caixaniveis">
            <div class="niveis">
                <div>Nível 1</div>
                <input type="text" placeholder="   Título do nível">
                <input type="text" placeholder="   % de acerto mínima">
                <input type="text" placeholder="   URL da imagem do nível">
                <input type="text" placeholder="   Descrição do nível">
            </div>
        </div>
        <div class="caixaniveis">
            <div class="niveis">
                <div>Nível 2</div>
                <input type="text" placeholder="   Título do nível">
                <input type="text" placeholder="   % de acerto mínima">
                <input type="text" placeholder="   URL da imagem do nível">
                <input type="text" placeholder="   Descrição do nível">
            </div>
        </div>
        <div class="caixaniveis">
            <div class="niveis">
                <div>Nível 3</div>
                <input type="text" placeholder="   Título do nível">
                <input type="text" placeholder="   % de acerto mínima">
                <input type="text" placeholder="   URL da imagem do nível">
                <input type="text" placeholder="   Descrição do nível">
            </div>
        </div>
      <div onclick="sucessocriacao()"><button>Finalizar Quizz</button></div>
      </div>`
}

function sucessocriacao() {
  limpatela ();
}

function exibirquizz(){
  limpatela();
  tela.innerHTML += `<div class="titulo-quizz">
  <img src="https://5287aa00874a313e299d-1850966fc307ff23e1e789aeafd2476b.ssl.cf5.rackcdn.com/PostImagem/42240/foto-branca-download-wallpapers-e-onde-usar_o1fcm9aiph1mte1km1f11cs53mng.png">
  <h2>Esse é o título do quizz</h2>
</div>
<div class="perguntas">
  <div class="pergunta">
      <div class="titulo">
          <h3>Pergunte aqui</h3>
      </div>
      <div class="alternativas">
          <div class="alternativa">
              <img src="https://pbs.twimg.com/profile_images/997263527080443904/ucgZYSqz_400x400.jpg">
              <strong>Resposta</strong>
          </div>
          <div class="alternativa">
              <img src="https://pbs.twimg.com/profile_images/997263527080443904/ucgZYSqz_400x400.jpg">
              <strong>Resposta</strong>
          </div>
          <div class="alternativa">
              <img src="https://pbs.twimg.com/profile_images/997263527080443904/ucgZYSqz_400x400.jpg">
              <strong>Resposta</strong>
          </div>
          <div class="alternativa">
              <img src="https://pbs.twimg.com/profile_images/997263527080443904/ucgZYSqz_400x400.jpg">
              <strong>Resposta</strong>
          </div>
      </div>
  </div>
</div>`
}