import React from 'react';
import CreateExpenseForm from './components/CreateExpenseForm/CreateExpenseForm'
import ExpenseApi from './api/ExpenseApi'
import './App.css'

function App() {

  return (
    <div className="App">
      <CreateExpenseForm onSubmit={ExpenseApi.create} />
    </div>
  );
}

export default App;