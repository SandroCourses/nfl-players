import React, { Component } from 'react';

class InputField extends Component {
  handleOnKeyUp = (event) => {
    this.props.updateField(this.props.identification, event.target.value);
  };

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.identification}>{this.props.label}</label>
        <input type="text" className="form-control" id={this.props.identification} placeholder={this.props.placeholder} onKeyUp={this.handleOnKeyUp} />
      </div>
    );
  }
}

export default InputField;
