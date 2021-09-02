import React, { Component } from 'react';
import { ErrorAlert } from './Alert';
import './NumberOfEvents.css';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 16,
    errorText: '',
  }

  handleInputChanged = (event) => {
    const value = Number(event.target.value);
    if (value < 1) {
      return this.setState({
        errorText: 'Please choose a number between 1 and 32',
        numberOfEvents: ''
      });
    } else if (value > 32) {
      return this.setState({
        errorText: 'Please choose a number between 1 and 32',
        numberOfEvents: ''
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: '',
      });
      this.props.updateEvents(value);
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <label className="event-label" htmlFor='numberOfEvent'>Number of events</label>
        <div className="number-input-box">
        <input
          type="number"
          className="event-number-input"
          placeholder='Enter Number'
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        </div>
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;