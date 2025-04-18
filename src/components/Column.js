import React from 'react';
import Task from './Task';

import '../styles/components-styles/Column.css';

function Column({ id, name, tasks }) {

  const titleClass = `column__title ${
    id === 1
      ? 'column__title--pending'
      : id === 2
      ? 'column__title--doing'
      : 'column__title--done'
  }`;

  return (
    <div className='column'>
      <h3 className={titleClass}>{name}</h3>
      <ul className='column__tasks'>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} name={task.name} user={task.user} columnId={id} />
        ))}
      </ul>
    </div>
  );
}

export default Column;