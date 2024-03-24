import Section from './Section';
import TaskForm from './TaskForm';
import useAxios from '../hooks/useAxios';

const FIREBASE_URL = 'https://gh-react-app-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json';

const AddTask = (props) => {
  const { error, isLoading, request: createTask } = useAxios();

  const addTask = (task) => {
    const newTask = (data) => props.addTask({ id: data.name, text: task });
    createTask({ method: 'POST', url: FIREBASE_URL, data: { text: task } }, newTask);
  };

  return (
    <Section>
      <TaskForm loading={isLoading} addTask={addTask} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default AddTask;
