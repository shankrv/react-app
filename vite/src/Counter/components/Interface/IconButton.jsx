import { memo } from 'react';

const IconButton = memo(function IconButton({ children, icon, ...props }) {
  console.log('<IconButton /> rendered');

  const Icon = icon;

  return (
    <button {...props} className='button'>
      <Icon className='button-icon' />
      <span className='button-text'>{children}</span>
    </button>
  );
});

export default IconButton;
