import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { startData } from './startData';

import './App.css';
import Home from './views/Home/Home';
import AddCard from './views/AddCard/AddCard';

function App() {
  const [allCards, setAllCards] = useState(JSON.parse(localStorage.getItem('allCards')));
  // const [activeCardId, setActiveCardId] = useState(0);
  const [displayDeleteWarning, setDisplayDeleteWarning] = useState(false);
  const [clickedDeleteCard, setClickedDeleteCard] = useState();

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

  const handleClickActiveCard = (cardId) => {
    // setActiveCardId(cardId);
    console.log(cardId);
    console.log(allCards);

    const index = allCards.findIndex(({ id }) => id === cardId);
    if (index !== -1) {
      const updatedData = [...allCards];
      updatedData.unshift(...updatedData.splice(index, 1));
      console.log(updatedData);
      setAllCards(updatedData);
    }
  };

  const handleSubmit = (card) => {
    // setActiveCardId(card.id);
    setAllCards([...allCards, card]);
  };

  function handleDisplayWarning(card) {
    setClickedDeleteCard(card);
    setDisplayDeleteWarning(!displayDeleteWarning);
  }

  const handleDeleteCard = () => {
    setDisplayDeleteWarning(false);
    const allCardsCopy = Array.from(allCards);
    const removedCardId = allCardsCopy.findIndex((card) => card.id === clickedDeleteCard.id);
    allCardsCopy.splice(removedCardId, 1);
    setAllCards(allCardsCopy);
    // setActiveCardId(allCards.at(-1).id);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Home
          allCards={allCards}
          // activeCardId={activeCardId}
          handleClickActiveCard={handleClickActiveCard}
          handleDeleteCard={handleDeleteCard}
          handleDisplayWarning={handleDisplayWarning}
          displayDeleteWarning={displayDeleteWarning}
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
