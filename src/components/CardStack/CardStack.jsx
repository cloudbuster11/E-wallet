import Card from '../Card/Card';

import './CardStack.css';

export default function CardStack({ allCards, activeCardId, handleClickActiveCard, handleDeleteCard }) {
  function removeActiveCard(allCards, activeCardId) {
    const allCardsCopy = Array.from(allCards);

    const cardForStack = allCardsCopy.findIndex((card) => card.id === activeCardId);
    allCardsCopy.splice(cardForStack, 1);
    return allCardsCopy;
  }

  const cardStack = removeActiveCard(allCards, activeCardId);

  const cardStackList = cardStack.map((card) => {
    return (
      <Card
        key={card.id}
        activeCard={card}
        handleClickActiveCard={handleClickActiveCard}
        handleDeleteCard={handleDeleteCard}
      />
    );
  });

  return <article className='card__stack'>{cardStackList}</article>;
}
