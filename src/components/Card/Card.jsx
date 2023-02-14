import { ChipDark, ChipLight } from '../../assets';

import './Card.css';

export default function Card({ activeCard, handleClickActiveCard }) {
  const emptyCardView = (
    <article className='card__container' style={{ backgroundColor: '#D0D0D0' }}>
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
        <section>
          <img src={ChipDark}></img>

          <img src={activeCard.img}></img>
        </section>
        <p>{activeCard.cardNumber}</p>
        <section>
          <section>
            <p>CARDHANDLER NAME</p>
            <p>{activeCard.name}</p>
          </section>
          <section>
            <p>VALID THRU</p>
            <p>{activeCard.valid}</p>
            <p>{activeCard.vendor}</p>
          </section>
        </section>
      </article>
    );
  }
  return <>{activeCard ? activeCardView : emptyCardView}</>;
}
