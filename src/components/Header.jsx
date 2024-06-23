import { Link } from 'react-router-dom';

const Header = ({ onClickCart, items }) => {
  const totalPrice = items.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" />
          <div className="headerInfo">
            <h3>React Sneakrs</h3>
            <p>Магазин лучший кросовок</p>
          </div>
        </div>
      </Link>

      <ul className="headerRight">
        <li onClick={onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" />
          <span>{totalPrice} лей</span>
        </li>
        <li>
          <Link to="favorites">
            <img width={18} height={18} src="/img/heart.svg" />
            <span>Закладки</span>
          </Link>
        </li>
        <li>
          <Link to="profile">
            <img width={18} height={18} src="/img/user.svg" />
            <span>Профиль</span>{' '}
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
