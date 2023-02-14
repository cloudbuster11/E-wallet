import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card/Card';
import CardStack from '../../components/CardStack/CardStack';
import Top from '../../components/Top/Top';

export default function Home({ allCards, activeCardId, activeCard, handleClickActiveCard }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/addcard');
  }

  // console.log(allCards);
  // console.log(activeCard);

  return (
    <>
      <Top title='E-WALLET' />
      <h2>Active Card</h2>
      <Card activeCard={activeCard} />

      <h2>Cardstack</h2>
      <CardStack
        allCards={allCards}
        activeCardId={activeCardId}
        handleClickActiveCard={handleClickActiveCard}
      />
      <button className='btn btn-addnewcard' onClick={handleClick}>
        ADD A NEW CARD
      </button>
    </>
  );
}
