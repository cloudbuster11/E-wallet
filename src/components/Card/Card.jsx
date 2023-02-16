import { ChipDark } from '../../assets';

import './Card.css';

export default function Card({ activeCard, handleClickActiveCard, handleDeleteCard }) {
  // const emptyCardView = (
  //   <article
  //     className='card__container card__placeholder'
  //     style={{ backgroundColor: '#D0D0D0', color: '#000' }}
  //   >
  //     <section className='card__top'>
  //       <img className='top__chip' src={ChipDark}></img>
  //     </section>
  //     <p className='card__number'>XXXX XXXX XXXX XXXX</p>
  //     <section className='card__bottom'>
  //       <section>
  //         <p className='card__label'>CARDHANDLER NAME</p>
  //         <p>Firstname Lastname</p>
  //       </section>
  //       <section>
  //         <p className='card__label'>VALID THRU</p>
  //         <p className='card__valid'>MM/YY</p>
  //       </section>
  //     </section>
  //   </article>
  // );

  let activeCardView;

  if (activeCard) {
    activeCardView = (
      <article
        className='card__container'
        onClick={() => {
          handleClickActiveCard(activeCard.id);
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          handleDeleteCard(activeCard);
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
  }
  return <>{activeCard ? activeCardView : emptyCardView}</>;
}
