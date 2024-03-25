import { useState } from 'react';

import './App.css';
import Sidebar from './components/Sidebar';
import AddProject from './components/AddProject';
import ProjectBase from './components/ProjectBase';
import ProjectDetails from './components/ProjectDetails';

export default function App() {
  // selectedId: [undefined: None, null: Add, Number: Select]
  const [projects, setProjects] = useState({ selectedId: undefined, list: [], tasks: [] });

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

  function selectProjectHandler(id) {
    setProjects((prev) => {
      return { ...prev, selectedId: id };
    });
  }

  function deleteProjectHandler() {
    setProjects((prev) => {
      return { ...prev, selectedId: undefined, list: prev.list.filter((item) => item.id !== prev.selectedId) };
    });
  }

  function createProject(project) {
    project.id = Math.random();
    setProjects((prev) => {
      return { ...prev, selectedId: project.id, list: [...prev.list, { ...project }] };
    });
  }

  function addTaskHandler(taskName) {
    setProjects((prev) => {
      return { ...prev, tasks: [...prev.tasks, { id: Math.random(), projectId: prev.selectedId, name: taskName }] };
    });
  }

  function deleteTaskHandler(id) {
    setProjects((prev) => {
      return { ...prev, tasks: prev.tasks.filter((item) => item.id !== id) };
    });
  }

  const project = projects.list.find((project) => project.id === projects.selectedId);
  const tasks = projects.tasks.filter((task) => task.projectId === projects.selectedId);

  let projectContent;
  if (projects.selectedId === null)
    projectContent = <AddProject onCreateProject={createProject} onCancelProject={cancelProjectHandler} />;
  else if (projects.selectedId === undefined) projectContent = <ProjectBase onAddProject={addProjectHandler} />;
  else
    projectContent = (
      <ProjectDetails
        project={project}
        tasks={tasks}
        onDeleteProject={deleteProjectHandler}
        onAddTask={addTaskHandler}
        onDeleteTask={deleteTaskHandler}
      />
    );

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar
        projects={projects.list}
        selectedId={projects.selectedId}
        onAddProject={addProjectHandler}
        onSelectProject={selectProjectHandler}
      />
      {projectContent}
    </main>
  );
}
