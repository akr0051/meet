import React, { Component } from "react";
import { BiMap } from 'react-icons/bi';

class ModalInfo extends Component {
    state = {
      show: false,
      showHideDetails: false,
    };

render() {
    let event = this.props.event;


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
      </div>
)
}}

export default ModalInfo;