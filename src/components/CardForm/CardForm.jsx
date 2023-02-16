import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { bitCoinTheme, blockChainTheme, evilTheme, ninjaTheme } from '../../themes';

import './CardForm.css';

export default function CardForm(props) {
  const navigate = useNavigate();
  let id = uuid().slice(0, 4);
  let newCard = {
    id: id,
  };

  function handleClick() {
    navigate('/');
  }

  return (
    <form className='addcard__form'>
      <label htmlFor='form__cardnumber'>Card Number</label>
      <input
        type='text'
        id='form__cardnumber'
        onChange={(e) => (newCard.cardNumber = e.target.value)}
      ></input>
      <label htmlFor='form__name'>Cardholder Name</label>
      <input
        type='text'
        id='form__name'
        placeholder='Firstname Lastname'
        onChange={(e) => (newCard.name = e.target.value)}
      ></input>
      <section className='misc__container'>
        <section className='valid'>
          <label htmlFor='form__valid'>Valid Thru</label>
          <input
            type='text'
            id='form__valid'
            placeholder='MM/YY'
            onChange={(e) => (newCard.valid = e.target.value)}
          ></input>
        </section>
        <section className='cvv'>
          <label htmlFor='form_cvv'>Cvv</label>
          <input
            type='numbers'
            id='form__cvv'
            maxLength={3}
            onChange={(e) => (newCard.cvv = e.target.value)}
          ></input>
        </section>
      </section>
      <label htmlFor='form_vendor'>Vendor</label>
      <select
        id='form__vendor'
        onChange={(e) => {
          newCard.vendor = e.target.value;
          newCard.theme = JSON.parse(e.target.selectedOptions[0].getAttribute('data-set'));
        }}
      >
        <option value=''></option>
        <option value='Bitcoin' data-set={JSON.stringify(bitCoinTheme)}>
          Bitcoin
        </option>
        <option value='Ninja' data-set={JSON.stringify(ninjaTheme)}>
          Ninja
        </option>
        <option value='Evil' data-set={JSON.stringify(evilTheme)}>
          Evil
        </option>
        <option value='Blockchain' data-set={JSON.stringify(blockChainTheme)}>
          Block Chain
        </option>
      </select>
      <button
        className='btn btn-addcard'
        onClick={(e) => {
          e.preventDefault();
          const neededKeys = ['id', 'name', 'cvv', 'vendor', 'cardNumber', 'valid'];

          if (neededKeys.every((key) => Object.keys(newCard).includes(key))) {
            props.handleSubmit(newCard);
            handleClick();
          } else alert('Please enter all your card details.');
        }}
      >
        ADD CARD
      </button>
    </form>
  );
}
