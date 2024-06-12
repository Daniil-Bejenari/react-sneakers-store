const Drawer = ({ onClickCloseCart, onClickRemoveItem, items = [] }) => {
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
          {items.map((obj) => (
            <div className="cartItem">
              <img
                width={70}
                height={70}
                src={obj.imageUrl}
                alt="sneakers"
              ></img>
              <div className="cartItem-info">
                <p>{obj.name}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img
                onClick={() => onClickRemoveItem(obj.id)}
                src="/img/btn-removed.svg"
                alt="sneakers"
              ></img>
            </div>
          ))}
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
