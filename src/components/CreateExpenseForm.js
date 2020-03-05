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
      <form className={'createExpenseForm section ui form'} onSubmit={this.createExpense}>
        <div className={'two fields'}>
          <div class='field'>
            <Input 
              placeholder={'Title'}
              keyName={'title'}
              placeHolder={'Expense Title'}
              setFieldValue={this.setFieldValue}
            />
          </div>
          <div class="field">
            <Input
              placeholder={'Value'}
              keyName={'value'}
              setFieldValue={this.setFieldValue}
            />
          </div>
        </div>
        <div class="field">
          <button className={'fluid ui violet button'} type='submit'>
            Create New Expense
          </button>
        </div>
      </form>
    );
  }
}

export default CreateExpenseForm;