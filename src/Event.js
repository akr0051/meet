import React, { Component } from "react";
import { BiMap } from 'react-icons/bi';
import './Event.css';

class Event extends Component {
  state = {
    show: false,
    showHideDetails: false,
  };

  handleButton = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    let event = this.props.event;

    return (
      <div className="Event">
        <div className="event-info">
        <h1 className="EventSummary">{event.summary}</h1>
        
        <h2 className="EventDate">
          start: {event.start.dateTime} - Time Zone: {event.start.timeZone}
        </h2>

        <div className="location">
        < BiMap className="loc-icon" color="white"/>
        
        <h3 className="EventLocation">{event.location}</h3>
        </div>
        </div>
        
        
        
        
        {this.state.show === true && (
          <p className="EventDetails">{event.description}</p>
        )}
        {this.state.show === false && (
          <button className="showMore" onClick={() => this.handleButton()}>
            Show details
          </button>
        )}
        {this.state.show === true && (
          <button className="showLess" onClick={() => this.handleButton()}>
            hide details
          </button>
        )}
      </div>
    );
  }
}
export default Event;