export default function Output({ value }) {
  console.log('<CounterOutput /> rendered');
  const cssClass = value >= 0 ? 'counter-output' : 'counter-output negative';
  return <span className={cssClass}>{value}</span>;
}
