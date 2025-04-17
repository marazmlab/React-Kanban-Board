import React, { useState } from 'react';
import Column from './Column';

function Board() {
  const [columns, setColumns] = useState([
    {
      id: 1,
      name: 'Pending',
      tasks: [
        { id: 1, name: 'Task1', user: 'Anna' },
        { id: 2, name: 'Task2', user: 'Marcin' },
      ],
    },
    {
      id: 2,
      name: 'Doing',
      tasks: [
        { id: 3, name: 'Task3', user: 'Milo' },
      ],
    },
    {
      id: 3,
      name: 'Doing',
      tasks: [
        { id: 4, name: 'Task4', user: 'Daniel' },
      ],
    },
  ]);

  return (
    <div>
      <h2>Board</h2>
      {columns.map((column) => (
        <Column key={column.id} name={column.name} tasks={column.tasks}/>
      ))}
    </div>
  );
}

export default Board;