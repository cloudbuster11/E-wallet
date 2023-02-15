import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card/Card';
import CardStack from '../../components/CardStack/CardStack';
import Top from '../../components/Top/Top';
import './Home.css';

export default function Home({ allCards, activeCardId, activeCard, handleClickActiveCard }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/addcard');
  }

  // console.log(allCards);
  // console.log(activeCard);

  return (
    <main>
      <Top title='E-WALLET' />
      <article className='active__card'>
        <h2 className='card__title'>Active Card</h2>
        <Card activeCard={activeCard} />
      </article>
      <CardStack
        allCards={allCards}
        activeCardId={activeCardId}
        handleClickActiveCard={handleClickActiveCard}
      />
      <button className='btn btn-addnewcard' onClick={handleClick}>
        ADD A NEW CARD
      </button>
    </main>
  );
}
