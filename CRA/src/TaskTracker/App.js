import { Fragment, useEffect, useState } from 'react';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import useAxios from './hooks/useAxios';

const FIREBASE_URL = 'https://gh-react-app-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json';

function App() {
  const [tasks, setTasks] = useState([]);
  const { error, isLoading, request: getTasks } = useAxios();

  const addTask = (task) => setTasks((prevTasks) => prevTasks.concat(task));

  useEffect(() => {
    const options = { method: 'GET', url: FIREBASE_URL };
    const handler = (data) => {
      const tasksList = [];
      for (const key in data) tasksList.push({ id: key, text: data[key].text });
      setTasks(tasksList);
    };
    getTasks(options, handler);
  }, [getTasks]);

  return (
    <Fragment>
      <AddTask addTask={addTask} />
      <Tasks tasks={tasks} loading={isLoading} error={error} getTasks={getTasks} />
    </Fragment>
  );
}

export default App;
