import React, { Component } from "react";
import { BiMap } from 'react-icons/bi';

class ModalInfo extends Component {
    state = {
      show: false,
      showHideDetails: false,
    };

render() {
    let { event } = this.props;


return (
    <div className="event">
      <div className="event-info">
      <div className="EventSummary-modal">{event.summary}</div>
      
      <div className="EventDate">
        start: {event.start.dateTime} - Time Zone: {event.start.timeZone}
      </div>

      <div className="location">
      < BiMap className="loc-icon" color="white"/>
      
      <div className="EventLocation">{event.location}</div>

      

      </div>
      

      </div>
      <div className="EventDetails">{event.description}</div>
      </div>
)
}}

export default ModalInfo;