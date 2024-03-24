export default function Tabs({ buttons, children, container: Buttons = 'menu' }) {
  return (
    <>
      <Buttons>{buttons}</Buttons>
      {children}
    </>
  );
}
