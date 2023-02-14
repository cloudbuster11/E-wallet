import Card from '../Card/Card';

import './CardStack.css';

export default function CardStack({ allCards, activeCardId, handleClickActiveCard }) {
  function removeActiveCard(allCards, activeCardId) {
    const allCardsCopy = Array.from(allCards);

    const cardForStack = allCardsCopy.findIndex((card) => card.id === activeCardId);
    allCardsCopy.splice(cardForStack, 1);
    return allCardsCopy;
  }

  const cardStack = removeActiveCard(allCards, activeCardId);
  // console.log('Lista med kort i stacken:', cardStack);

  const cardStackList = cardStack.map((card) => {
    // console.log(card);
    return <Card key={card.id} activeCard={card} handleClickActiveCard={handleClickActiveCard} />;
  });

  return <article className='card__stack'>{cardStackList}</article>;
}
