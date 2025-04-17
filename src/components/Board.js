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

  const moveTask = (taskId, fromColumnId, toColumnId) => {
    setColumns((prevColumns) => {
      const fromColumn = prevColumns.find((col) => col.id === fromColumnId);
      const toColumn = prevColumns.find((col) => col.id === toColumnId);

      const taskIndex = fromColumn.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex === -1) return prevColumns;

      const [task] = fromColumn.tasks.splice(taskIndex, 1);
      toColumn.tasks.push(task);

      return [...prevColumns];
    });
  };

  return (
    <div>
      <h2>Board</h2>
      <button onClick={() => moveTask(1, 1, 2)}>
        MOVE TASK 1 TO COLUMN 2
      </button>
      {columns.map((column) => (
        <Column key={column.id} name={column.name} tasks={column.tasks}/>
      ))}
    </div>
  );
}

export default Board;