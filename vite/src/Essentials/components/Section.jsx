export default function Section({ title, children, ...attrib }) {
  return (
    <section {...attrib}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
