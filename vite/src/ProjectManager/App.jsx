import './App.css';
import Sidebar from './components/Sidebar';
import AddProject from './components/AddProject';
import ProjectBase from './components/ProjectBase';
import { useState } from 'react';

export default function App() {
  // selectedId: [undefined: None, null: Add, Number: Select]
  const [projects, setProjects] = useState({ selectedId: undefined, list: [] });

  function addProjectHandler() {
    setProjects((prev) => {
      return { ...prev, selectedId: null };
    });
  }

  function cancelProjectHandler() {
    setProjects((prev) => {
      return { ...prev, selectedId: undefined };
    });
  }

  function createProject(project) {
    setProjects((prev) => {
      return { ...prev, selectedId: undefined, list: [...prev.list, { ...project, id: Math.random() }] };
    });
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar projects={projects.list} onAddProject={addProjectHandler} />
      {projects.selectedId === null ? (
        <AddProject onCreateProject={createProject} onCancelProject={cancelProjectHandler} />
      ) : (
        <ProjectBase onAddProject={addProjectHandler} />
      )}
    </main>
  );
}
