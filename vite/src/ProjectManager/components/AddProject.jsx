import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function AddProject({ onCreateProject, onCancelProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function createProject() {
    const project = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    // validation
    if (
      Object.values(project)
        .map((value) => String(value).trim())
        .includes('')
    ) {
      modal.current.open();
      return;
    }

    onCreateProject(project);
  }
  return (
    <>
      <Modal ref={modal} caption='OK'>
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>Please enter valid values for every input field</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button onClick={onCancelProject} className='text-stone-800 hover:text-stone-950'>
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={createProject}
              className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} type='text' label='Title' />
          <Input ref={description} label='Description' textarea />
          <Input ref={dueDate} type='date' label='Due Date' />
        </div>
      </div>
    </>
  );
}
