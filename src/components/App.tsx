import React, { useState } from 'react';
import { useTasks } from '../hooks/useTasks.ts'; 
import Filter from './Filter.tsx';
import '../styles/App.scss'

const App = () => {
  const { tasks, loading, error } = useTasks();  
  const [filter, setFilter] = useState<'all' | 'completed' | 'notCompleted'>('all');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;


  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'notCompleted') return !task.completed;
    return true;
  });

  return (
    <div className="app-container">
  <h1 className="app-header">Task List</h1>
  <Filter setFilter={setFilter} />
  <div className="app-content">
    {filteredTasks.map((task) => (
      <div className="task-item" key={task.id}>
        <h3>{task.title}</h3>
        <p>{task.completed ? 'Completed' : 'Not completed'}</p>
      </div>
    ))}
  </div>
</div>
  );
};

export default App;