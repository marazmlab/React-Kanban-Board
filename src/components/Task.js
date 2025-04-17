import React from 'react';

import '../styles/components-styles/Task.css'

function Task({ name, user }) {
  return (
    <li className='task'>
      <p className='task__name'>{name}</p> 
      <p className='task__user'>{user}</p>
    </li>
  );
}

export default Task;