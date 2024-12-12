import React from 'react';
import { useTasks } from '../hooks/useTasks.ts'; 

const App = () => {
  const { tasks, loading, error } = useTasks();  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Task List</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.completed ? 'Completed' : 'Not completed'}</p>
        </div>
      ))}
    </div>
  );
};

export default App;