import { useContext } from 'react';
import { currency } from '../util/format';
import Modal from './Interface/Modal';
import Input from './Interface/Input';
import Button from './Interface/Button';
import CartContext from '../context/Cart';
import ProgressContext from '../context/Progress';

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(ProgressContext);

  const total = cartCtx.items.reduce((total, item) => total + item.price * item.quantity, 0);

  function hideCheckout() {
    progressCtx.hide();
  }

  return (
    <Modal open={progressCtx.progress === 'checkout'} onClose={hideCheckout}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currency.format(total)}</p>
        <Input label='Name' type='text' id='name' />
        <Input label='Email' type='email' id='email' />
        <Input label='Street' type='text' id='street' />
        <div className='control-row'>
          <Input label='City' type='text' id='pincode' />
          <Input label='Pincode' type='text' id='city' />
        </div>
        <p className='modal-actions'>
          <Button type='button' isText onClick={hideCheckout}>
            Close
          </Button>
          <Button>Order</Button>
        </p>
      </form>
    </Modal>
  );
}
