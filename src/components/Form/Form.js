import React, { Component } from 'react';
import InputField from '../InputField/InputField';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      teamLocation: '',
      teamname: ''
    };
  }

  updateField = (identification, newValue) => {
    this.setState({
      [identification]: newValue
    });
  };

  sendData = () => {
    console.log(this.state);
  };

  isEverythingFilled = () => {
    if(this.state.firstname && this.state.lastname && this.state.teamLocation && this.state.teamname) {
      return '';
    } else {
      return 'disabled';
    }
  };

  render() {
    return (
      <form>
        <InputField label="Firstname" identification="firstname" placeholder="e.g. Tom" updateField={this.updateField} />
        <InputField label="Lastname" identification="lastname" placeholder="e.g. Brady" updateField={this.updateField} />
        <InputField label="Location of team" identification="teamLocation" placeholder="e.g. New England" updateField={this.updateField} />
        <InputField label="Teamname" identification="teamname" placeholder="e.g. Patriots" updateField={this.updateField} />
        <button className="btn btn-default" type="button" disabled={this.isEverythingFilled()} onClick={this.sendData}>Save</button>
      </form>
    );
  }
}

export default Form;
