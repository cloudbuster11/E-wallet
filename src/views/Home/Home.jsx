import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card/Card';
import CardStack from '../../components/CardStack/CardStack';
import Top from '../../components/Top/Top';
import './Home.css';

export default function Home({ allCards, activeCardId, handleClickActiveCard, handleDeleteCard }) {
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
      {allCards.length >= 1 ? (
        <>
          <article className='active__card'>
            <h2 className='card__title'>Active Card</h2>
            <Card
              activeCard={activeCard}
              handleClickActiveCard={handleClickActiveCard}
              handleDeleteCard={handleDeleteCard}
            />
          </article>
          <CardStack
            allCards={allCards}
            activeCardId={activeCardId}
            handleClickActiveCard={handleClickActiveCard}
            handleDeleteCard={handleDeleteCard}
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
