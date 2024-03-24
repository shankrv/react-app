import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

const Modal = forwardRef(function Modal({ caption, children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'>
      {children}
      <form method='dialog' className='mt-4 text-right'>
        <Button>{caption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default Modal;
