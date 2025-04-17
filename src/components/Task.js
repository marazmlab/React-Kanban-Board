import React from 'react';

import '../styles/components-styles/Task.css'

function Task({ name, user }) {
  return (
    <ul className='task'>
      <li className='task__name'>{name}</li> 
      <li className='task__user'>{user}</li>
    </ul>
  );
}

export default Task;