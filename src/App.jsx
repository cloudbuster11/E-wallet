import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { bitCoinTheme, blockChainTheme, evilTheme, ninjaTheme } from './themes';

import './App.css';

// import router from './router';

// import { createBrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import AddCard from './views/AddCard/AddCard';

const startData = [
  {
    id: 0,
    cardNumber: '1234 1234 1234 1234',
    name: 'Joakim Trulsson',
    vendor: 'Bitcoin Inc',
    valid: '12/12',
    theme: bitCoinTheme,
  },
  {
    id: 1,
    cardNumber: 1234123412341234,
    name: 'Emmy Trulsson',
    valid: '12/12',
    vendor: 'Block Chain',
    theme: blockChainTheme,
  },
  {
    id: 2,
    cardNumber: 1234123412341234,
    name: 'Bella Trulsson',
    vendor: 'Evil Corp',
    valid: '12/12',
    theme: evilTheme,
  },
  {
    id: 3,
    cardNumber: 1234123412341234,
    name: 'Eddi Trulsson',
    vendor: 'Ninja Bank',
    valid: '12/12',
    theme: ninjaTheme,
  },
];

function App() {
  const [allCards, setAllCards] = useState(JSON.parse(localStorage.getItem('allCards')));
  const [activeCardId, setActiveCardId] = useState(0);

  useEffect(() => {
    if (allCards === null) {
      setAllCards(startData);
      localStorage.setItem('allCards', JSON.stringify(startData));
    } else if (localStorage.allCards === JSON.stringify(startData)) setAllCards(startData);
    else {
      setAllCards(JSON.parse(localStorage.getItem('allCards')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('allCards', JSON.stringify(allCards));
  }, [allCards]);

  let activeCard = {};

  if (allCards) {
    activeCard = allCards.find((card) => card.id === activeCardId);
  }

  const handleClickActiveCard = (card) => {
    setActiveCardId(card);
  };

  const handleSubmit = (card) => {
    setAllCards([...allCards, card]);
  };

  // Bygg om så id state inte behövs?
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Home
          allCards={allCards}
          activeCardId={activeCardId}
          activeCard={activeCard}
          handleClickActiveCard={handleClickActiveCard}
        />
      ),
    },
    {
      path: '/addcard',
      element: <AddCard handleSubmit={handleSubmit} />,
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
