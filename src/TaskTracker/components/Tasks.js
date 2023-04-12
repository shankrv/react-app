import Task from './Task';
import Section from './Section';

import classes from './Tasks.module.css';

const Tasks = (props) => {
  const data = { content: '', tasks: [] };

  switch (true) {
    case props.loading:
      data.content = 'Loading...';
      break;

    case props.error:
      data.content = <button onClick={props.getTasks}>Try again</button>;
      break;

    case !props.tasks.length:
      data.content = <h2>No tasks found.</h2>;
      break;

    default:
      data.tasks = (
        <ul>
          {props.tasks.map((task) => (
            <Task key={task.id}>{task.text}</Task>
          ))}
        </ul>
      );
      break;
  }

  return (
    <Section>
      <div className={classes.container}>{data.content || data.tasks}</div>
    </Section>
  );
};

export default Tasks;
