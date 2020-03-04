import React from 'react';
import Input from './Input';

class CreateExpenseForm extends React.PureComponent {

  createExpense = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  setFieldValue = (keyName, value) => {
    this.setState({ [keyName]: value });
  }

  render() {
    return (
      <form className={'expenseForm'} onSubmit={this.createExpense}>

        <Input 
          keyName={'title'}
          placeHolder={'Expense Title'}
          setFieldValue={this.setFieldValue}
        />

        <Input
          keyName={'value'}
          placeHolder={'Expense Value'}
          setFieldValue={this.setFieldValue}
        />

        <button type='submit'>
          Create New Expense
        </button>

      </form>
    );
  }
}

export default CreateExpenseForm;