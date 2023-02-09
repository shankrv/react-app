import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
  const max = Math.max(...props.data.map((item) => item.value));
  const data = props.data.map((item) => <ChartBar key={item.id} label={item.label} value={item.value} max={max} />);
  return <div className='chart'>{data}</div>;
}

export default Chart;
