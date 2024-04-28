export default function Button({ isText, className, children, ...props }) {
  const classes = (isText ? 'text-button ' : 'button ') + className;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
