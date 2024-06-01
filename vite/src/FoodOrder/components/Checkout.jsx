import axios from 'axios';
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

  async function submitHandler(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    const { status, data: order } = await axios.post('http://localhost:3000/api/orders', {
      user: { ...data },
      items: cartCtx.items,
    });
    console.log({ status, order });
  }

  return (
    <Modal open={progressCtx.progress === 'checkout'} onClose={hideCheckout}>
      <form onSubmit={submitHandler}>
        <h2>Checkout</h2>
        <p>Total Amount: {currency.format(total)}</p>
        <Input label='Name' type='text' id='name' />
        <Input label='Email' type='email' id='email' />
        <Input label='Street' type='text' id='street' />
        <div className='control-row'>
          <Input label='City' type='text' id='city' />
          <Input label='Pincode' type='text' id='pincode' />
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
