import { useReducer } from 'react';

import CartContext from './cart';

const initCart = { items: [], total: 0 };

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item); // returns new object w/o. updating state
    const updatedTotal = state.total + action.item.price * action.item.qty;
    return { items: updatedItems, total: updatedTotal };
  }
  return initCart;
};

const CartProvider = (props) => {
  const [cart, dispatchCart] = useReducer(cartReducer, initCart);

  const addItem = (item) => dispatchCart({ type: 'ADD', item });
  const removeItem = (id) => dispatchCart({ type: 'REMOVE', id });

  const context = { items: cart.items, total: cart.total, addItem, removeItem };
  return <CartContext.Provider value={context}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
