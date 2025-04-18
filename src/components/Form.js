import React, { useState, useContext } from 'react';
import { BoardContext } from './BoardContext';

import '../styles/components-styles/Form.css';

function Form() {
  const { columns, setColumns } = useContext(BoardContext);
  const [taskName, setTaskName] = useState('');
  const [taskUser, setTaskUser] = useState('');
  const [selectedColumn, setSelectedColumn] = useState(columns[0]?.id || 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName.trim() || !taskUser.trim()) {
      alert('Please fill in all fields');
      return;
    }

    setColumns((prevColumns) => {
      const updatedColumns = prevColumns.map((column) => {
        if (column.id === selectedColumn) {
          return {
            ...column,
            tasks: [
              ...column.tasks,
              {
                id: Date.now(),
                name: taskName,
                user: taskUser,
              },
            ],
          };
        }
        return column;
      });

      return updatedColumns;
    });

    setTaskName('');
    setTaskUser('');
    setSelectedColumn(columns[0]?.id || 1);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form__group'>
        <label htmlFor="taskName">Task Name:</label>
        <input
          id='taskName'
          type='text'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </div>
      <div className='form__group'>
        <label htmlFor="taskUser">User:</label>
        <input
          id='taskUser'
          type='text'
          value={taskUser}
          onChange={(e) => setTaskUser(e.target.value)}
          required
        />
      </div>
      <div className='form__group'>
        <label htmlFor="column">Column:</label>
        <select
          id='column'
          value={selectedColumn}
          onChange={(e) => setSelectedColumn(Number(e.target.value))}
        >
          {columns.map((column) => (
            <option key={column.id} value={column.id}>
              {column.name}
            </option>
            ))}
        </select>
      </div>
      <button className='form__button' type='submit'>
        Add Task
      </button>
    </form>
  );
}

export default Form;