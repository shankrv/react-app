import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const FIREBASE_URL = 'https://gh-react-app-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks((prevTasks) => prevTasks.concat(task));

  const getTasks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(FIREBASE_URL);
      console.log('Tasks: ', data, data ? Object.keys(data).length : 0);

      const tasksList = [];
      for (const key in data) tasksList.push({ id: key, text: data[key].text });
      setTasks(tasksList);
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Fragment>
      <AddTask addTask={addTask} />
      <Tasks tasks={tasks} loading={isLoading} error={error} getTasks={getTasks} />
    </Fragment>
  );
}

export default App;
