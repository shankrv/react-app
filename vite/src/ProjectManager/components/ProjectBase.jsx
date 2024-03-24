import projectImage from '../assets/project.png';
import Button from './Button';

export default function ProjectBase({ onAddProject }) {
  return (
    <div className='mt-4 text-center w-2/3'>
      <img src={projectImage} alt='no-project' className='w-16 h-16 object-contain mx-auto' />
      <h2 className='text-xl font-bold text-stone-500 my-4'>No project selected</h2>
      <p className='text-stone-400 mb-4'>Select a project or get started with a new one</p>
      <p className='mt-8'>
        <Button onClick={onAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
