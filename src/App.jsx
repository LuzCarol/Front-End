

function App() {

  return (
    <>
      <header>
        <div class="icones-headerall">
          <div class="icones-header1">
            <a href="perfil.html"><img src="icons/person-circle.svg" alt="Ícone do perfil" height="50" /></a>
          </div>
          <div class="icones-header2">
            <a href="jogos.html"><img src="icons/bell-fill.svg" /></a>
          </div>
        </div>

        <h1>Início</h1>

      </header>
      <div class="menu">
        <div className="menu">
          <ul>
            <li>
              <a href="index.html">
                <img src="icons/house-door-fill.svg" alt="house-door-fill" />
              </a>
            </li>
            <li>
              <a href="Perfil.html">
                <img src="icons/person-fill.svg" alt="person-fill" />
              </a>
            </li>
            <li>
              <a href="jogos.html">
                <img src="icons/controller.svg" alt="controller" />
              </a>
            </li>
            <li>
              <a href="Loja.html">
                <img src="icons/joystick.svg" alt="joystick" />
              </a>
            </li>
            <li>
              <a href="carrinho.html">
                <img src="icons/cart3.svg" alt="cart3" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
