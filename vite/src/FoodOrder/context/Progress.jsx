import { createContext, useState } from 'react';

const ProgressContext = createContext({
  progress: '', // [cart,checkout]
  hide: () => {},
  showCart: () => {},
  showCheckout: () => {},
});

export function ProgressContextProvider({ children }) {
  const [progress, setProgress] = useState('');

  function showCart() {
    setProgress('cart');
  }

  function showCheckout() {
    setProgress('checkout');
  }

  function hide() {
    setProgress('');
  }

  const context = { progress, showCart, showCheckout, hide };
  return <ProgressContext.Provider value={context}>{children}</ProgressContext.Provider>;
}

export default ProgressContext;
