import { createContext, useReducer } from 'react';
import { PRODUCTS } from '../products';

export const CartContext = createContext({ items: [], addItemToCart() {}, updateCartItemQuantity() {} });

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];
    const existingCartItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === action.data.id);
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity + 1 };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = PRODUCTS.find((product) => product.id === action.data.id);
      updatedItems.push({ id: action.data.id, name: product.title, price: product.price, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'UPDATE_ITEM') {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex((item) => item.id === action.data.productId);
    const updatedItem = { ...updatedItems[updatedItemIndex] };
    updatedItem.quantity += action.data.amount;

    if (updatedItem.quantity <= 0) updatedItems.splice(updatedItemIndex, 1);
    else updatedItems[updatedItemIndex] = updatedItem;
    return { ...state, items: updatedItems };
  }
  return state;
}

export default function CartContextProvider({ children }) {
  const [shoppingCart, dispatch] = useReducer(cartReducer, { items: [] });

  function handleAddItemToCart(id) {
    dispatch({ type: 'ADD_ITEM', data: { id } });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    dispatch({ type: 'UPDATE_ITEM', data: { productId, amount } });
  }

  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity,
  };

  return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>;
}
