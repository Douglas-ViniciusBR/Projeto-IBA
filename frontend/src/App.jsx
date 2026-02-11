import "./App.css";

function App() {
  return (
    <>
      <div>
        <header>
          <section id="cabecario">
            <img src="/public/logo-iba.png" alt="logo" />
            <nav class="menu">
              <a href="">
                <ion-icon name="person-outline"></ion-icon> Home
              </a>
              <a href="">
                <ion-icon name="calendar-outline"></ion-icon> Ministérios
              </a>
              <a href="">
                <ion-icon name="call-outline"></ion-icon> Contatos
              </a>
            </nav>
            <img id="user" src="/public/icon-users.png" alt="Usuário" />
          </section>
        </header>

        <main>
          <div id="fundo">
            <img src="public/fundo.webp" alt="" />
          </div>
          <section>
            <h1 class="topicos">Sobre Nós</h1>
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
            <h1 class="topicos">Programações</h1>
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
          <h1 class="topicos">Princípios</h1>
          <p class="descricao">conteudo</p>
          <h1 class="topicos">Localização</h1>
          <p class="descricao">conteudo</p>
        </main>

        <footer id="rodape">&copy; Todos os direitos reservados</footer>
      </div>
    </>
  );
}

export default App;
