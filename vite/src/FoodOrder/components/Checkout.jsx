import { useContext } from 'react';
import { currency } from '../util/format';
import useAxios from '../hooks/useAxios';
import Error from './Error';
import Modal from './Interface/Modal';
import Input from './Interface/Input';
import Button from './Interface/Button';
import CartContext from '../context/Cart';
import ProgressContext from '../context/Progress';

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(ProgressContext);
  const { sendRequest, isLoading, data, error, clearData } = useAxios('http://localhost:3000/api/orders', {
    method: 'post',
  });

  const total = cartCtx.items.reduce((total, item) => total + item.price * item.quantity, 0);

  function hideCheckout() {
    progressCtx.hide();
  }

  function clearCart() {
    progressCtx.hide();
    cartCtx.clear();
    clearData();
  }

  async function submitHandler(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    sendRequest({ user: { ...data }, items: cartCtx.items });
  }

  if (data) {
    return (
      <Modal open={progressCtx.progress === 'checkout'} onClose={clearCart}>
        <h2>Success!</h2>
        <p>Your order has been placed successfully.</p>
        <p>
          Order ID: <strong>{data.id}</strong>
        </p>
        <p className='modal-actions'>
          <Button onClick={clearCart}>OK</Button>
        </p>
      </Modal>
    );
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
        {error && <Error title='Order Error' message={error} />}
        <p className='modal-actions'>
          {isLoading ? (
            <span>Placing your order...</span>
          ) : (
            <>
              <Button type='button' isText onClick={hideCheckout}>
                Close
              </Button>
              <Button>Order</Button>
            </>
          )}
        </p>
      </form>
    </Modal>
  );
}
