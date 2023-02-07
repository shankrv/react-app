import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button type={props.type} className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

/** --- Styled Component --- **
import styled from 'styled-components';

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #e9ecef;
  color: white;
  background: #343a40;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  width: 100%

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

  @media (min-width: 768px) {
    width: auto;
  }

`;
*/

export default Button;
