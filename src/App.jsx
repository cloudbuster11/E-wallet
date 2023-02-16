import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { startData } from './startData';

import './App.css';
import Home from './views/Home/Home';
import AddCard from './views/AddCard/AddCard';

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

  const handleClickActiveCard = (card) => {
    setActiveCardId(card);
  };

  const handleSubmit = (card) => {
    setActiveCardId(card.id);
    setAllCards([...allCards, card]);
  };

  const handleDeleteCard = (clickedCard) => {
    const allCardsCopy = Array.from(allCards);
    const removedCardId = allCardsCopy.findIndex((card) => card.id === clickedCard.id);

    allCardsCopy.splice(removedCardId, 1);
    setAllCards(allCardsCopy);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Home
          allCards={allCards}
          activeCardId={activeCardId}
          handleClickActiveCard={handleClickActiveCard}
          handleDeleteCard={handleDeleteCard}
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
