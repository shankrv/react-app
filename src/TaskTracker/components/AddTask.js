import axios from 'axios';
import { useState } from 'react';

import Section from './Section';
import TaskForm from './TaskForm';

const FIREBASE_URL = 'https://gh-react-app-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json';

const AddTask = (props) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const addTask = async (task) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.post(FIREBASE_URL, { text: task });
      console.log('Task: ', data);
      props.addTask({ id: data.name, text: task });
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
    setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm loading={isLoading} addTask={addTask} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default AddTask;
