import React, { useState } from 'react';

const Drawer = ({ onClickCloseCart, onClickRemoveItem, items = [] }) => {
  const [orderMade, setOrderMade] = useState(false);
  const [orderedItems, setOrderedItems] = useState([]);

  const handleMakeOrder = () => {
    setOrderedItems(items);
    setOrderMade(true);
    console.log('Заказанные элементы:', items);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer-header">
          <h3>Корзина</h3>
          <img
            onClick={onClickCloseCart}
            src="/img/btn-removed.svg"
            alt="Close"
          />
        </div>

        {orderMade ? (
          <div className="orderMade">
            <img src="/img/order.svg" alt="order" />
            <h3>Заказ оформлен!</h3>

            <p>Ваш заказ скоро будет передан курьерской доставке</p>
            <button onClick={onClickCloseCart} className="greenButton">
              Вернуться назад{' '}
              <img
                className="left-arrow"
                src="/img/arrow-left.svg"
                alt="arrow"
              />
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="cart-empty">
            <img src="/img/cart-empty.svg" alt="empty" />
            <h3>Корзина пустая</h3>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClickCloseCart} className="greenButton">
              Вернуться назад{' '}
              <img
                className="left-arrow"
                src="/img/arrow-left.svg"
                alt="arrow"
              />
            </button>
          </div>
        ) : (
          <>
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem">
                  <img
                    width={70}
                    height={70}
                    src={obj.imageUrl}
                    alt="sneakers"
                  />
                  <div className="cartItem-info">
                    <p>{obj.name}</p>
                    <b>{obj.price} лей.</b>
                  </div>
                  <img
                    onClick={() => onClickRemoveItem(obj.id)}
                    src="/img/btn-removed.svg"
                    alt="remove"
                  />
                </div>
              ))}
            </div>
            <div className="final-price">
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
              <button className="greenButton" onClick={handleMakeOrder}>
                Оформить заказ{' '}
                <img className="right-arrow" src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Drawer;
