import React from 'react';
import Column from './Column';

function Board() {
  const columns = ['Pending', 'Doing', 'Done'];

  return (
    <div>
      <h2>Board</h2>
      {columns.map((name, index) => (
        <Column key={index} name={name}/>
      ))}
    </div>
  );
}

export default Board;