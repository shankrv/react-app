import { useEffect } from 'react';

export default function Confirm({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log('set-timer:');
    const timer = setTimeout(() => onConfirm(), 3000);

    return () => {
      console.log('clear-timer:');
      clearTimeout(timer);
    };
  }, [onConfirm]);

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
