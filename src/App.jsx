import './App.scss';
import './index.scss';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" />
          <div className="headerInfo">
            <h3>React Sneakrs</h3>
            <p>Магазин лучший кросовок</p>
          </div>
        </div>

        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/cart.svg" />
            <span>1200 руб</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>

      <div className="content">
        <h1>Все кросовки</h1>

        <div className="sneakers">
          <div className="card">
            <img
              width={133}
              height={122}
              src="img/sneakers/1.jpg"
              alt="img"
            ></img>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div>
                <span>Цена</span>
                <b>12 999</b>
              </div>
              <button>
                <img width={11} height={11}></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={122}
              src="img/sneakers/2.jpg"
              alt="img"
            ></img>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div>
                <span>Цена</span>
                <b>12 999</b>
              </div>
              <button>
                <img width={11} height={11}></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={122}
              src="img/sneakers/3.jpg"
              alt="img"
            ></img>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div>
                <span>Цена</span>
                <b>12 999</b>
              </div>
              <button>
                <img width={11} height={11}></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={122}
              src="img/sneakers/4.jpg"
              alt="img"
            ></img>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div>
                <span>Цена</span>
                <b>12 999</b>
              </div>
              <button>
                <img width={11} height={11}></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={122}
              src="img/sneakers/5.jpg"
              alt="img"
            ></img>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div>
                <span>Цена</span>
                <b>12 999</b>
              </div>
              <button>
                <img width={11} height={11}></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={122}
              src="img/sneakers/6.jpg"
              alt="img"
            ></img>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price">
              <div>
                <span>Цена</span>
                <b>12 999</b>
              </div>
              <button>
                <img width={11} height={11}></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
