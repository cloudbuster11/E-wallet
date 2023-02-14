import Card from '../../components/Card/Card';
import Top from '../../components/Top/Top';
import CardForm from '../../components/CardForm/CardForm';

export default function AddCard({ handleSubmit }) {
  // console.log(handleSubmit);
  return (
    <>
      <Top title='ADD A NEW BANK CARD' />
      <p>ACTIVE CARD</p>
      <Card activeCard={false} />
      <CardForm handleSubmit={handleSubmit} />
    </>
  );
}
