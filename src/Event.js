import React, { Component } from "react";
import  Modal  from './modal';
import { BiMap } from 'react-icons/bi';
import './Event.css';

class Event extends Component {
  state = {
    show: false,
    showHideDetails: false,
    open: false,
  };

  handleButton = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };


  toggleModal = (e) => {
    e.preventDefault();
    this.setState({
        open: !this.state.open
    });
};

  render() {
    let { event } = this.props;
    const { open } = this.state; 

    return (
      <div className="event">
        <div className="event-info">
        <div className="EventSummary">{event.summary}</div>
        
        <div className="EventDate">
          start: {event.start.dateTime} - Time Zone: {event.start.timeZone}
        </div>

        <div className="location">
        < BiMap className="loc-icon" color="white"/>
        
        <div className="EventLocation">{event.location}</div>
        </div>
        </div>
        
        {this.state.show === false && (
         <div>
         <button className="showMore" onClick={(e) => this.toggleModal(e)}>
            Show details
          </button>
          
          {open && <Modal event={event} onClose={(e) => this.toggleModal(e)} />}
          </div>
        )}
        
      </div>
    );
  }
}
export default Event;