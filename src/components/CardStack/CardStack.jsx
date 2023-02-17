import Card from '../Card/Card';

import './CardStack.css';

export default function CardStack({ allCards, handleClickActiveCard, handleDisplayWarning }) {
  function removeActiveCard(allCards) {
    const allCardsCopy = Array.from(allCards);
    const removedCard = allCardsCopy.shift();

    return allCardsCopy;
  }

  const cardStack = removeActiveCard(allCards, 0);

  const cardStackList = cardStack.map((card) => {
    return (
      <Card
        key={card.id}
        activeCard={card}
        handleClickActiveCard={handleClickActiveCard}
        handleDisplayWarning={handleDisplayWarning}
      />
    );
  });

  return <article className='card__stack'>{cardStackList}</article>;
}
