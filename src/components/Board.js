import React, { useContext } from 'react';
import Column from './Column';
import Form from './Form';

import '../styles/components-styles/Board.css'
import { BoardContext } from './BoardContext';

function Board() {
  const { columns } = useContext(BoardContext);
  
  return (
    <div className='board'>
      <Form />
      <div className='board__columns'>
        {columns.map((column) => (
          <Column
           key={column.id} 
           id={column.id}
           limit={column.limit}
           name={column.name} 
           tasks={column.tasks}/>
        ))}
      </div>
    </div>
  );
}

export default Board;