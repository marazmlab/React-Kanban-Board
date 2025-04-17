import React from 'react';
import Board from './components/Board';
import { BoardProvider } from './components/BoardContext';

function App() {
  return (
    <BoardProvider>
      <Board />
    </BoardProvider>
  );
}

export default App;