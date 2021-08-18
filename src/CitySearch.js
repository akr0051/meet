import React, { Component } from 'react';
import { InfoAlert } from './Alert';
import { FaSearch } from 'react-icons/fa';
import './CitySearch.css';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: false,
        infoText: ''
      }

      handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({showSuggestions:true});
        const suggestions = this.props.locations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
          this.setState({
            query: value,
            infoText: 'Please try another city.',
            suggestions: [],
          });
        } else {
          return this.setState({
            query: value,
            suggestions,
            infoText:''
          });
        }
      };

      handleItemClicked = (suggestion) => {
        this.setState({
          query: suggestion,
          showSuggestions: false,
          infoText: ''
        });
      
        this.props.updateEvents(suggestion);
      }

    render() {
        return (
          <div className="CitySearch">
            <div className="input-box">
            <FaSearch className="search-icon" color="white" />
            <input
              type="text"
              className="city"
              placeholder="Search..."
              value={this.state.query}
              onChange={this.handleInputChanged}
              onFocus={() => { this.setState({ showSuggestions: true }) }}
            />
            <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
            {this.state.suggestions.map((suggestion) => (
                <li className="sug-list"
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
                >{suggestion}</li>
            ))}
            <li className="city-list" onClick={() => this.handleItemClicked("all")}>
            <b className="city-main">See all cities</b>
            </li>
            </ul>
            <InfoAlert className="alert" text={this.state.infoText} />
          </div>
          </div>
        );
    }
}

export default CitySearch;