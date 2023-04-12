import { useRef } from 'react';

import clasess from './TaskForm.module.css';

const TaskForm = (props) => {
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const task = inputRef.current.value;
    if (task.trim().length) props.addTask(task);
  };

  return (
    <form className={clasess.form} onSubmit={submitHandler}>
      <input type='text' ref={inputRef} />
      <button>{props.loading ? 'Adding...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
