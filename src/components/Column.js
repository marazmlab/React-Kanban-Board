import React from 'react';
import Task from './Task';

import '../styles/components-styles/Column.css';

function Column({ id, name, tasks }) {
  return (
    <div className='column'>
      <h3 className='column__title'>{name}</h3>
      <ul className='column__tasks'>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} name={task.name} user={task.user} columnId={id} />
        ))}
      </ul>
    </div>
  );
}

export default Column;