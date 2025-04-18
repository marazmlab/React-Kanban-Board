import React, { createContext, useState, useEffect } from 'react';

export const BoardContext = createContext();

const LOCAL_STORAGE_KEY = 'kanban';

export const BoardProvider = ({ children }) => {
  const loadColumnsFromLocalStorage = () => {
    const storedColumns = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedColumns ? JSON.parse(storedColumns) : null;
  };

  const [columns, setColumns] = useState(() => {
    return (
      loadColumnsFromLocalStorage() || [
        {
          id: 1,
          name: 'Pending',
          limit: 4,
          tasks: [
            { id: 1, name: 'Task1', user: 'Anna' },
            { id: 2, name: 'Task2', user: 'Marcin' },
            { id: 5, name: 'Task2', user: 'Marcin' },
          ],
        },
        {
          id: 2,
          name: 'Doing',
          limit: 4,
          tasks: [{ id: 3, name: 'Task3', user: 'Milo' }],
        },
        {
          id: 3,
          name: 'Done',
          limit: 4,
          tasks: [{ id: 4, name: 'Task4', user: 'Daniel' }],
        },
      ]
    )
  });

  const moveTask = (taskId, fromColumnId, toColumnId) => {
    setColumns((prevColumns) => {
      const fromColumn = prevColumns.find((col) => col.id === fromColumnId);
      const toColumn = prevColumns.find((col) => col.id === toColumnId);
  
      if (!toColumn) {
        console.error(`Column with id ${toColumnId} does not exist.`);
        return prevColumns;
      }
  
      if (toColumn.tasks.length >= toColumn.limit) {
        console.error(`Column '${toColumn.name}' has reached its task limit.`);
        return prevColumns;
      }
  
      const taskIndex = fromColumn.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex === -1) {
        console.error(`Task with id ${taskId} does not exist in column '${fromColumn.name}'.`);
        return prevColumns;
      }
  
      const [task] = fromColumn.tasks.splice(taskIndex, 1);
      toColumn.tasks.push(task);
  
      return [...prevColumns];
    });
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(columns));
  }, [columns]);

  return (
    <BoardContext.Provider value={{ columns, setColumns, moveTask }}>
      {children}
    </BoardContext.Provider>
  );

};