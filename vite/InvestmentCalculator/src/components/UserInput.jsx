export default function UserInput({ investment, onChange }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>Initial Investment</label>
          <input
            type='number'
            value={investment.initial}
            required
            onChange={(event) => onChange('initial', Number(event.target.value))}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type='number'
            value={investment.annual}
            required
            onChange={(event) => onChange('annual', Number(event.target.value))}
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>Expected Return</label>
          <input
            type='number'
            value={investment.rateOfReturn}
            required
            onChange={(event) => onChange('rateOfReturn', Number(event.target.value))}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type='number'
            value={investment.duration}
            required
            min='1'
            onChange={(event) => onChange('duration', Number(event.target.value))}
          />
        </p>
      </div>
    </section>
  );
}
