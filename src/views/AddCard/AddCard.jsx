import Card from '../../components/Card/Card';
import Top from '../../components/Top/Top';
import CardForm from '../../components/CardForm/CardForm';
import { placeHolderTheme } from '../../themes';

export default function AddCard({ handleSubmit }) {
  return (
    <>
      <Top title='ADD A NEW BANK CARD' />

      <h2 className='card__title'>New card</h2>
      <Card activeCard={placeHolderTheme} />

      <CardForm handleSubmit={handleSubmit} />
    </>
  );
}
