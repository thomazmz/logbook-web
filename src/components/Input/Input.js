import React from 'react';

class Input extends React.PureComponent {

  changeHandler = keyName => event => {
    this.props.setFieldValue(keyName, event.target.value);
  }

  render() {
    return (
      <input
        type={this.props.type || 'text'}
        onChange={this.changeHandler(this.props.keyName)}
      />
    );
  }
}

export default Input;