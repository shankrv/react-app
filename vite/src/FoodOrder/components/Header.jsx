import Button from './Interface/Button';

export default function Header() {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src='assets/food-logo.jpg' alt='food-order' height='72' width='72' />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button isText>Cart (N)</Button>
      </nav>
    </header>
  );
}
