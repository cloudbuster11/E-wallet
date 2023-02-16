import './Card.css';

export default function Card({ activeCard, handleClickActiveCard, handleDisplayWarning }) {
  // console.log(activeCard);
  const activeCardView = (
    <article
      className='card__container'
      onClick={(e) => {
        e.preventDefault();
        handleClickActiveCard(activeCard.id);
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        handleDisplayWarning(activeCard);
      }}
      style={{ background: activeCard.theme.color, color: activeCard.theme.fontColor }}
    >
      <section className='card__top'>
        <img className='top__chip' src={activeCard.theme.chip}></img>

        <img className='top__vendor' src={activeCard.theme.img}></img>
      </section>
      <p className='card__number'>{activeCard.cardNumber}</p>
      <section className='card__bottom'>
        <section>
          <p className='card__label'>CARDHANDLER NAME</p>
          <p>{activeCard.name}</p>
        </section>
        <section>
          <p className='card__label'>VALID THRU</p>
          <p className='card__valid'>{activeCard.valid}</p>
        </section>
      </section>
    </article>
  );

  return <>{activeCardView}</>;
}
