import React from 'react';
import Task from './Task';

function Column({ name }) {
  const tasks = [
    { id: 1, name: 'Task1', user: 'Anna' },
    { id: 2, name: 'Task2', user: 'Marcin' },
  ];

  return (
    <div>
      <h3>{name}</h3>
      {tasks.map((task) => (
        <Task key={task.id} name={task.name} user={task.user} />
      ))}
    </div>
  );
}

export default Column;