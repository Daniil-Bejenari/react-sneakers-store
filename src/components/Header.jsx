const Header = ({ onClickCart }) => {
  return (
    <header>
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png" />
        <div className="headerInfo">
          <h3>React Sneakrs</h3>
          <p>Магазин лучший кросовок</p>
        </div>
      </div>

      <ul className="headerRight">
        <li onClick={onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" />
          <span>1200 руб</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/heart.svg" />
          <span>Закладки</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
};
export default Header;
