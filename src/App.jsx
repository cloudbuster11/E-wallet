import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';
import { ChipDark, ChipLight, Bitcoin, Blockchain, Evil, Ninja } from './assets';

// import router from './router';

// import { createBrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import AddCard from './views/AddCard/AddCard';

function App() {
  const [allCards, setAllCards] = useState([]);
  const [activeCardId, setActiveCardId] = useState(0);

  useEffect(() => {
    setAllCards([
      {
        id: 0,
        cardNumber: 1234123412341234,
        name: 'Joakim Trulsson',
        vendor: 'Bitcoin Inc',
        valid: '12/12',
        img: Bitcoin,
        color: '#FFAE34',
      },
      {
        id: 1,
        cardNumber: 1234123412341234,
        name: 'Emmy Trulsson',
        vendor: 'Block Chain',
        valid: '12/12',
        img: Blockchain,
        color: '#8B58F9',
      },
      {
        id: 2,
        cardNumber: 1234123412341234,
        name: 'Bella Trulsson',
        vendor: 'Evil Corp',
        valid: '12/12',
        img: Evil,
        color: '#F33355',
      },
      {
        id: 3,
        cardNumber: 1234123412341234,
        name: 'Eddi Trulsson',
        vendor: 'Ninja Bank',
        valid: '12/12',
        img: Ninja,
        color: '#222222',
      },
    ]);
  }, []);

  let activeCard = {};

  if (allCards) {
    activeCard = allCards.find((card) => card.id === activeCardId);
  }

  const handleClickActiveCard = (card) => {
    setActiveCardId(card);
    console.log(card);
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
