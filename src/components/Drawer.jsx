const Drawer = ({ onClickCloseCart }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer-header">
          <h3>Корзина</h3>
          <img
            onClick={onClickCloseCart}
            src="/img/btn-removed.svg"
            alt="Close"
          ></img>
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
  );
};

export default Drawer;
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
</div>;
