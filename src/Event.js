import React, { Component } from "react";
import  Modal  from './modal';
import { BiMap } from 'react-icons/bi';
import './Event.css';

class Event extends Component {
  state = {
    show: false,
    showHideDetails: false,
    open: true,
  };

  handleButton = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };


  openModal = (e) => {
    e.preventDefault();
    this.setState({
        open: !this.state.open
    });
};

onClose = (e) => {
  this.props.onClose && this.props.onClose(e);
};


  render() {
    let event = this.props.event;
    if (this.props.open) {
      return null;
    }   

    return (
      <div className="event">
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
         <div>
         <button className="showMore" onClick={(e) => this.openModal(e)}>
            Show details
          </button>
          
          <Modal open={this.state.open} onClose={this.openModal} />
          </div>
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