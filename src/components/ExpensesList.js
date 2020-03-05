import React from 'react';
import ExpensesListItem from './ExpenseItem';

class ExpensesList extends React.PureComponent {
  
  render() {
    return (
      <div className='expenseList'>
        <table className='ui violet fixed table'>
          <thead>
            <tr>
              <th>{'Total'}</th>
              <th>{'R$' + this.props.expenses.reduce((sum, expense) => sum + parseFloat(expense.value), 0)}</th>
            </tr>
          </thead>
          <tbody>
            {this.props.expenses.map((expense, index) => (
              <ExpensesListItem key={index} item={expense} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ExpensesList;