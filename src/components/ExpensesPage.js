import React from 'react';
import ExpenseApi from '../api/ExpenseApi'
import CreateExpenseForm from './CreateExpenseForm'
import ExpensesList from './ExpensesList'

class ExpensesPage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      expenses: ExpenseApi.getAll()
    }
  }

  createExpense = expense => {
    console.log(this.state)
    ExpenseApi.create(expense);
    this.setState({
      expenses: ExpenseApi.getAll()
    });
    console.log(this.state)
  }

  render() {
    console.log('!')
    return (
      <React.Fragment>
        <CreateExpenseForm onSubmit={this.createExpense} />
        <ExpensesList expenses={this.state.expenses} />
      </React.Fragment>
    );
  }
}

export default ExpensesPage;