import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export default function CardForm(props) {
  const navigate = useNavigate();
  const id = uuid().slice(0, 4);

  let newCard = {
    id,
  };

  function handleClick() {
    navigate('/');
  }

  return (
    <form>
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
      <fieldset>
        <label htmlFor='form__valid'>Valid Thru</label>
        <input
          type='text'
          id='form__valid'
          placeholder='MM/YY'
          onChange={(e) => (newCard.valid = e.target.value)}
        ></input>
        <label htmlFor='form_cvv'>Cvv</label>
        <input type='numbers' id='form__cvv' onChange={(e) => (newCard.cvv = e.target.value)}></input>
      </fieldset>
      <label htmlFor='form_vendor'>Vendor</label>
      <select id='form__vendor' onChange={(e) => (newCard.vendor = e.target.value)}>
        <option value=''></option>
        <option value='Bitcoin'>Bitcoin</option>
        <option value='Ninja'>Ninja</option>
        <option value='Evil'>Evil</option>
        <option value='Blockchain'>Block Chain</option>
      </select>
      <button
        className='btn btn-addcard'
        onClick={(e) => {
          e.preventDefault();
          props.handleSubmit(newCard);
          handleClick();
        }}
      >
        ADD CARD
      </button>
    </form>
  );
}
