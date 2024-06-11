import './App.scss';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import './index.scss';
import React, { useEffect } from 'react';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  useEffect(() => {
    fetch('https://666889f4f53957909ff86aca.mockapi.io/items')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer onClickCloseCart={() => setCartOpened(false)}></Drawer>
      ) : null}
      <Header onClickCart={() => setCartOpened(true)}></Header>

      <div className="content">
        <div className="conent-header">
          <h1>Все кросовки</h1>
          <div className="search-block">
            <img src="/img/loop.svg" alt="search"></img>
            <input placeholder="Search"></input>
          </div>
        </div>

        <div className="sneakers">
          {items.map((item) => (
            <Card
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
