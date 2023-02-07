/** --- Functional Component --- **
import './Button.css';

const Button = (props) => {
  return (
    <button type={props.type} className='button' onClick={props.onClick}>
      {props.children}
    </button>
  );
};
*/

import styled from 'styled-components';

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #e9ecef;
  color: white;
  background: #343a40;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    color: #3a3a3a;
    background: #f1f3f5;
    border-color: #3a3a3a;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button;
