import './DeleteWarning.css';

export default function DeleteWarning({ handleDisplayWarning, handleDeleteCard }) {
  return (
    <aside className='delete__modal'>
      <h3>Warning</h3>
      <p>Are you sure you want to delete this card?</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleDeleteCard();
        }}
      >
        Yes
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleDisplayWarning();
        }}
      >
        No
      </button>
    </aside>
  );
}
