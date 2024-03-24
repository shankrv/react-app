import './ChartBar.css';

function ChartBar(props) {
  const data = { height: '0%', ...props };
  if (data.max > 0) data.height = Math.round((data.value / data.max) * 100) + '%';

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{ height: data.height }}></div>
      </div>
      <div className='chart-bar__label'>{data.label}</div>
    </div>
  );
}

export default ChartBar;
