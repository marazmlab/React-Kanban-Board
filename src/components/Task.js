import React from 'react';

function Task({ name, user }) {
  return (
    <div>
      <strong>{name}</strong> - {user}
    </div>
  );
}

export default Task;