import React from 'react';

class Input extends React.PureComponent {

  changeHandler = keyName => event => {
    this.props.setFieldValue(keyName, event.target.value);
  }

  render() {
    return (
      <div className={'ui input'}>
        <input
          type={this.props.type || 'text'}
          placeholder={this.props.placeholder || ''}
          onChange={this.changeHandler(this.props.keyName)}
        />
      </div>
    );
  }
}

export default Input;