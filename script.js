
function limpatela() {
    let tela = document.querySelector(".TodasasTelas");
    tela.innerHTML = `
    <div class="tela1-1"></div>
    <div class="tela1-2"><div>`
}
function geradortela1 () {
    let tela = document.querySelector(".tela1-1");
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

function geradortela2 () {
    let tela = document.querySelector(".tela1-2");
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