import "./App.css";

function App() {
  return (
    <>
      <div>
        <header>
          <section id="cabecario">
            <img src="/public/logo-iba.png" alt="logo" />
            <nav class="menu">
              <a href="#sobre-nos">
                <ion-icon name="person-outline"></ion-icon> Sobre Nós
              </a>
              <a href="#programacoes">
                <ion-icon name="calendar-outline"></ion-icon> Programações
              </a>
              <a href="#contatos">
                <ion-icon name="call-outline"></ion-icon> Contatos
              </a>
              <a href="#localizacao">
                <ion-icon name="location-outline"></ion-icon> Localização
              </a>
            </nav>
          </section>
        </header>

        <main>
          <div id="fundo">
            <img src="public/fundo.webp" alt="" />
          </div>
          <section>
            <h1 id="sobre-nos" class="topicos">
              Sobre Nós
            </h1>
            <p class="descricao">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h1 id="programacoes" class="topicos">
              Programações
            </h1>
            <p class="descricao">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </section>
          <h1 class="topicos">Contatos</h1>
          <p id="contatos" class="descricao">
            conteudo
          </p>
          <h1 id="localizacao" class="topicos">
            Localização
          </h1>
          <p class="descricao">conteudo</p>
        </main>

        <footer id="rodape">&copy; Todos os direitos reservados</footer>
      </div>
    </>
  );
}

export default App;
