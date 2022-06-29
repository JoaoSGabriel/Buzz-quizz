
geradortela1_1();
function limpatela() {
    let tela = document.querySelector("body");
    tela.innerHTML = ``
}
function geradortela1_1 () {
    let tela = document.querySelector("body");
    tela.innerHTML = `
    <div class="topo">BuzzQuizz</div>
    <div class="semquizz">
        <div>Você não criou nenhum<br>quizz ainda :(</div>
        <div onclick="criarquizz()"><button>Criar Quizz</button></div>
    </div>
    <div class="quizzes">
        <p>Todos os Quizzes</p>
        <div class="quizz" onclick="exibirquizz()">
            <img src="https://thumbs.dreamstime.com/b/fundo-azul-claro-com-brilho-e-c%C3%ADrculos-ilustra%C3%A7%C3%A3o-do-vetor-de-divers%C3%A3o-inverno-para-cartaz-festa-cart%C3%B5es-ano-novo-natal-160774554.jpg"/>
            <div>Pensa num titulo que ta maneiro</div>
        </div>
        <div class="quizz" onclick="exibirquizz()">
            <img src="https://thumbs.dreamstime.com/b/fundo-azul-claro-com-brilho-e-c%C3%ADrculos-ilustra%C3%A7%C3%A3o-do-vetor-de-divers%C3%A3o-inverno-para-cartaz-festa-cart%C3%B5es-ano-novo-natal-160774554.jpg"/>
            <div>Pensa num titulo que ta maneiro</div>
        </div>
        <div class="quizz" onclick="exibirquizz()">
            <img src="https://thumbs.dreamstime.com/b/fundo-azul-claro-com-brilho-e-c%C3%ADrculos-ilustra%C3%A7%C3%A3o-do-vetor-de-divers%C3%A3o-inverno-para-cartaz-festa-cart%C3%B5es-ano-novo-natal-160774554.jpg"/>
            <div>Pensa num titulo que ta maneiro</div>
        </div>
        <div class="quizz" onclick="exibirquizz()">
            <img src="https://thumbs.dreamstime.com/b/fundo-azul-claro-com-brilho-e-c%C3%ADrculos-ilustra%C3%A7%C3%A3o-do-vetor-de-divers%C3%A3o-inverno-para-cartaz-festa-cart%C3%B5es-ano-novo-natal-160774554.jpg"/>
            <div>Pensa num titulo que ta maneiro</div>
        </div>
        <div class="quizz" onclick="exibirquizz()">
            <img src="https://thumbs.dreamstime.com/b/fundo-azul-claro-com-brilho-e-c%C3%ADrculos-ilustra%C3%A7%C3%A3o-do-vetor-de-divers%C3%A3o-inverno-para-cartaz-festa-cart%C3%B5es-ano-novo-natal-160774554.jpg"/>
            <div>Pensa num titulo que ta maneiro</div>
        </div>
        <div class="quizz" onclick="exibirquizz()">
            <img src="https://thumbs.dreamstime.com/b/fundo-azul-claro-com-brilho-e-c%C3%ADrculos-ilustra%C3%A7%C3%A3o-do-vetor-de-divers%C3%A3o-inverno-para-cartaz-festa-cart%C3%B5es-ano-novo-natal-160774554.jpg"/>
            <div>Pensa num titulo que ta maneiro</div>
        </div>
    </div>`
}

function geradortela1_2 () {
    let tela = document.querySelector("body");
    tela.innerHTML = `
    <div class="topo">BuzzQuizz</div>
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
      </div>`
}
function criarquizz() {
  limpatela();
  let tela = document.querySelector("body");
  tela.innerHTML = `
  <div class="tela3">
  <div class="topo">BuzzQuizz</div>
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