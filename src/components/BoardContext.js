import React, { createContext, useState } from 'react';

export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
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
      tasks: [{ id: 3, name: 'Task3', user: 'Milo' }],
    },
    {
      id: 3,
      name: 'Done',
      tasks: [{ id: 4, name: 'Task4', user: 'Daniel' }],
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
    <BoardContext.Provider value={{ columns, moveTask }}>
      {children}
    </BoardContext.Provider>
  );
  
};