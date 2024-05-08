import { createContext, useReducer } from 'react';

const CartContext = createContext({ items: [], add: () => {}, remove: () => {} });

function cartReducer(state, action) {
  if (action.type === 'ADD') {
    const items = [...state.items];
    const index = items.findIndex((item) => item.id === action.item.id);
    if (index > -1) {
      const item = items[index];
      items[index] = { ...item, quantity: item.quantity + 1 };
    } else {
      items.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items };
  }

  if (action.type === 'REMOVE') {
    const items = [...state.items];
    const index = items.findIndex((item) => item.id === action.id);
    const item = items[index];
    item.quantity === 1 ? items.splice(index, 1) : (item.quantity = item.quantity - 1);
    return { ...state, items };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCart] = useReducer(cartReducer, { items: [] });

  function add(item) {
    dispatchCart({ type: 'ADD', item });
  }

  function remove(id) {
    dispatchCart({ type: 'REMOVE', id });
  }

  const context = { items: cart.items, add, remove };
  return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
}

export default CartContext;
