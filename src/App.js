import React from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <AddTodo />
      <VisibleTodoList />
    </div>
  );
}

export default App;
