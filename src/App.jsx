import './App.scss';
import './index.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <div className="drawer-header">
            <h3>Корзина</h3>
            <img src="/img/btn-removed.svg" alt="sneakers"></img>
          </div>

          <div className="items">
            <div className="cartItem">
              <img
                width={70}
                height={70}
                src="/img/sneakers/1.jpg"
                alt="sneakers"
              ></img>
              <div className="cartItem-info">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>

              <img src="/img/btn-removed.svg" alt="sneakers"></img>
            </div>

            <div className="cartItem">
              <img
                width={70}
                height={70}
                src="/img/sneakers/1.jpg"
                alt="sneakers"
              ></img>
              <div className="cartItem-info">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>

              <img src="/img/btn-removed.svg" alt="sneakers"></img>
            </div>
          </div>

          <div className="final-pirce">
            <ul>
              <li>
                <span>Итого</span>

                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>

                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="arrow"></img>
            </button>
          </div>
        </div>
      </div>

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
        <div className="conent-header">
          <h1>Все кросовки</h1>
          <div className="search-block">
            <img src="/img/loop.svg" alt="search"></img>
            <input placeholder="Search"></input>
          </div>
        </div>

        <div className="sneakers">
          <div className="card">
            <img
              className="unliked"
              width={32}
              height={32}
              src="img/heart-unliked.svg"
              alt="unliked"
            ></img>
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
                <img src="/img/Group 91.svg" width={32} height={32}></img>
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
                <img src="/img/Group 91.svg" width={32} height={32}></img>
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
                <img src="/img/Group 91.svg" width={32} height={32}></img>
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
                <img src="/img/Group 91.svg" width={32} height={32}></img>
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
                <img src="/img/Group 91.svg" width={32} height={32}></img>
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
                <img src="/img/Group 91.svg" width={32} height={32}></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
