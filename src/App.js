import React from 'react';
import Board from './components/Board';
import Header from "./components/Header";
import { BoardProvider } from './components/BoardContext';

function App() {
  return (
    <BoardProvider>
      <Header />
      <Board />
    </BoardProvider>
  );
}

export default App;