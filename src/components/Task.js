import React, { useContext } from 'react';
import { BoardContext } from "./BoardContext";

import '../styles/components-styles/Task.css'

function Task({ id, name, user, columnId }) {
  const { moveTask } = useContext(BoardContext);

  return (
    <li className='task'>
      <div className='task__card'>
        <p className='task__name'>{name}</p>
        <p className='task__user'>{user}</p>
      </div>
      <div className='task__actions'>
        <button
          className='task__button'
          onClick={() => moveTask(id, columnId, columnId -1)}
          disabled={columnId === 1}
        >
          ←
        </button>
        <button
          className='task__button'
          onClick={() => moveTask(id, columnId, columnId + 1)}
          disabled={columnId === 3}
        >
          →
        </button>
      </div>
    </li>
  );
}

export default Task;