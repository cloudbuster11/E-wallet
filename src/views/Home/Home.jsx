import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Card from '../../components/Card/Card';
import CardStack from '../../components/CardStack/CardStack';
import Top from '../../components/Top/Top';
import DeleteWarning from '../../components/DeleteWarning/DeleteWarning';
import './Home.css';

export default function Home({
  allCards,
  activeCardId,
  handleClickActiveCard,
  handleDeleteCard,
  handleDisplayWarning,
  displayDeleteWarning,
}) {
  const navigate = useNavigate();
  if (allCards === null) return;
  // if (Object.keys(allCards).length === 0) return;
  let activeCard = {};

  if (allCards) {
    activeCard = allCards.find((card) => card.id === activeCardId);
  }

  function handleClick() {
    navigate('/addcard');
  }

  return (
    <>
      <Top title='E-WALLET' />

      {displayDeleteWarning ? (
        <DeleteWarning handleDisplayWarning={handleDisplayWarning} handleDeleteCard={handleDeleteCard} />
      ) : null}

      {allCards.length >= 1 ? (
        <>
          <article className='active__card'>
            <h2 className='card__title'>Active Card</h2>
            <Card
              activeCard={activeCard}
              handleClickActiveCard={handleClickActiveCard}
              handleDeleteCard={handleDeleteCard}
              handleDisplayWarning={handleDisplayWarning}
            />
          </article>
          <CardStack
            allCards={allCards}
            activeCardId={activeCardId}
            handleClickActiveCard={handleClickActiveCard}
            handleDisplayWarning={handleDisplayWarning}
          />
          <button className='btn btn-addnewcard' onClick={handleClick}>
            ADD A NEW CARD
          </button>
        </>
      ) : (
        <>
          <p className='text-alert'>
            You have no cards added. <br></br>Please click on Add a new card to begin.
          </p>
          <button className='btn btn-addnewcard' onClick={handleClick}>
            ADD A NEW CARD
          </button>
        </>
      )}
    </>
  );
}
