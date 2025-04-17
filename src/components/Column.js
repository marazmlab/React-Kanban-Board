import React from 'react';
import Task from './Task';

function Column({ name, tasks }) {
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