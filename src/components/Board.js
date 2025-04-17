import React, { useContext, useState } from 'react';
import Column from './Column';

import '../styles/components-styles/Board.css'
import { BoardContext } from './BoardContext';

function Board() {
  const { columns } = useContext(BoardContext);
  
  return (
    <div className='board'>
      <div className='board__columns'>
        {columns.map((column) => (
          <Column
           key={column.id} 
           id={column.id}
           name={column.name} 
           tasks={column.tasks}/>
        ))}
      </div>
    </div>
  );
}

export default Board;