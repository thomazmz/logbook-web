import React from 'react';
import ExpensesListItem from './ExpenseItem';

class ExpensesList extends React.PureComponent {

  buildItems() {
    return this.props.expenses.map((expense, index) => (
      <ExpensesListItem key={index} item={expense} />
    ))
  }

  getTotal() {
    return this.props.expenses
    .map(expense => expense.value)
    .reduce((prev, next) => parseFloat(prev) + parseFloat(next))
  }

  render() {
    return (
      <div className='expenseList'>
        <table className='ui violet fixed table'>
          <thead>
            <tr>
              <th>{'Total'}</th>
              <th>{'R$' + this.getTotal()}</th>
            </tr>
          </thead>
          <tbody>
            {this.buildItems()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ExpensesList;