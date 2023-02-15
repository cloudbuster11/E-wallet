import { ChipDark, ChipLight } from '../../assets';

import './Card.css';

export default function Card({ activeCard, handleClickActiveCard }) {
  const emptyCardView = (
    <article className='card__container active__card' style={{ backgroundColor: '#D0D0D0' }}>
      <img src={ChipDark}></img>
      <p>XXXXXXXXXXXX</p>
      <p>CARDHANDLER NAME</p>

      <p>FIRSTNAME LASTNAME</p>
      <p>VALID THRU</p>
      <p>MM/YY</p>
      {/* <p>{activeCard.vendor}</p> */}
    </article>
  );

  let activeCardView;

  if (activeCard) {
    activeCardView = (
      <article
        className='card__container'
        onClick={() => {
          handleClickActiveCard(activeCard.id);
        }}
        style={{ backgroundColor: activeCard.color }}
      >
        <section className='card__top'>
          <img className='top__chip' src={ChipDark}></img>

          <img className='top__vendor' src={activeCard.img}></img>
        </section>
        <p className='card__number'>{activeCard.cardNumber}</p>
        <section className='card__bottom'>
          <section>
            <p className='card__label'>CARDHANDLER NAME</p>
            <p>{activeCard.name}</p>
          </section>
          <section>
            <p className='card__label'>VALID THRU</p>
            <p>{activeCard.valid}</p>
          </section>
        </section>
      </article>
    );
  }
  return <>{activeCard ? activeCardView : emptyCardView}</>;
}
