import React from 'react';
import ExpensesListItem from './ExpenseItem';

function ExpensesList(props) {
  return (
    <ul className='expensesList'>
      {props.expenses.map((expense, index) => (
        <ExpensesListItem key={index} item={expense} />
      ))}
    </ul>
  );
}

export default ExpensesList;