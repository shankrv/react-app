import { useReducer } from 'react';

import CartContext from './cart';

const initCart = { items: [], total: 0 };

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotal = state.total + action.item.price * action.item.qty;

    const cartItems = [...state.items];
    const itemIndex = cartItems.findIndex((item) => item.id === action.item.id);
    const existingItem = cartItems[itemIndex];

    if (existingItem) {
      const updatedItem = { ...existingItem, qty: existingItem.qty + action.item.qty };
      cartItems[itemIndex] = updatedItem;
    } else cartItems.push(action.item);

    return { items: cartItems, total: updatedTotal };
  }
  if (action.type === 'REMOVE') {
    const cartItems = [...state.items];
    const itemIndex = cartItems.findIndex((item) => item.id === action.id);
    const existingItem = cartItems[itemIndex];
    const updatedTotal = state.total - existingItem.price;

    if (existingItem.qty === 1) cartItems.splice(itemIndex, 1);
    else {
      const updatedItem = { ...existingItem, qty: existingItem.qty - 1 };
      cartItems[itemIndex] = updatedItem;
    }

    return { items: cartItems, total: updatedTotal };
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
