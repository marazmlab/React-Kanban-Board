import React, { useContext, useState } from 'react';
import Column from './Column';

import '../styles/components-styles/Board.css'
import { BoardContext } from './BoardContext';

function Board() {
  const { columns, moveTask} = useContext(BoardContext);
  
  return (
    <div className='board'>
      <button className='board__button' onClick={() => moveTask(1, 1, 2)}>
        MOVE TASK 1 TO COLUMN 2
      </button>
      <div className='board__columns'>
        {columns.map((column) => (
          <Column key={column.id} name={column.name} tasks={column.tasks}/>
        ))}
      </div>
    </div>
  );
}

export default Board;