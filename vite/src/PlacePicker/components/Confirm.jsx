export default function Confirm({ onConfirm, onCancel }) {
  return (
    <div id='delete-confirmation'>
      <h2>Remove Place</h2>
      <p>Do you really want to remove this place?</p>
      <div id='confirmation-actions'>
        <button onClick={onCancel} className='button-text'>
          No
        </button>
        <button onClick={onConfirm} className='button'>
          Yes
        </button>
      </div>
    </div>
  );
}
