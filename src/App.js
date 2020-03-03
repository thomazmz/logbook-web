import React from 'react';
import AccountApi from './api/account/AccountApi'
import CreateAccountForm from './components/CreateAccount/CreateAccountForm'
import './App.css'

function App() {

  return (
    <div className="App">
      <CreateAccountForm
        createAccountApi={AccountApi.createAccount}
      />
    </div>
  );
}

export default App;
