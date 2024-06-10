import './App.scss';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import './index.scss';
import React from 'react';

const arr = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: 'img/sneakers/1.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 1299,
    imageUrl: 'img/sneakers/2.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imageUrl: 'img/sneakers/3.jpg',
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imageUrl: 'img/sneakers/4.jpg',
  },
  {
    name: 'Мужские Кроссовки Under Armour Curry 8',
    price: 15199,
    imageUrl: 'img/sneakers/5.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Kyrie 7',
    price: 11299,
    imageUrl: 'img/sneakers/6.jpg',
  },
  {
    name: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: 10799,
    imageUrl: 'img/sneakers/7.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike LeBron XVIII',
    price: 16499,
    imageUrl: 'img/sneakers/8.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Lebron XVIII Low',
    price: 13999,
    imageUrl: 'img/sneakers/9.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imageUrl: 'img/sneakers/10.jpg',
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imageUrl: 'img/sneakers/11.jpg',
  },

  {
    name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
    price: 11299,
    imageUrl: 'img/sneakers/12.jpg',
  },
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

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
          {arr.map((item) => (
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
