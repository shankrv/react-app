import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [taskName, setTaskName] = useState('');

  function changeHandler(event) {
    setTaskName(event.target.value);
  }

  function clickHandler() {
    if (taskName.trim() === '') return;
    onAddTask(taskName);
    setTaskName('');
  }

  return (
    <div className='flex items-center gap-4'>
      <input type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200' value={taskName} onChange={changeHandler} />
      <button className='text-stone-700 hover:text-stone-950' onClick={clickHandler}>
        Add Task
      </button>
    </div>
  );
}
