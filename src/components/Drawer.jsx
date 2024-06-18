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

        {items.length == 0 ? (
          <div className="cart-empty">
            <img src="/img/cart-empty.svg" alt="empty" />
            <h3>Корзина пустая</h3>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className="greenButton ">
              Вернуться назад{' '}
              <img
                className="left-arrow"
                src="/img/arrow-left.svg"
                alt="arrow"
              ></img>
            </button>
          </div>
        ) : (
          <>
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

                  <b>21 498 лей.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>

                  <b>1074 лей.</b>
                </li>
              </ul>
              <button className="greenButton ">
                Оформить заказ{' '}
                <img
                  className="right-arrow"
                  src="/img/arrow.svg"
                  alt="arrow"
                ></img>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Drawer;
