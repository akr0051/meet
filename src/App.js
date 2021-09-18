import React, { Component } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import WelcomeScreen from './WelcomeScreen';
import './App.css';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 16,
    warningText: '',
    showWelcomeScreen: undefined,
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
      true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events), 
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  }

  updateEventCount =(x) => {
    this.setState({
      numberOfEvents: x
    });
  }

  render() {
    const { locations, numberOfEvents, events } = this.state;
    if (this.state.showWelcomeScreen === undefined) return <div
      className="App" />
    return (
      <div className="App">
        
        <div className="title">meet</div>

        <h1 className="subtitle">Choose your nearest city</h1>

        <div className="top">
        
        <CitySearch updateEvents={this.updateEvents} locations={locations}/>
        
        <NumberOfEvents
          updateEvents={this.updateEventCount}
          numberOfEvents={numberOfEvents}
        />      

        </div>
    
        <div className="meet-data">
  
         <div className="data-vis-wrapper">

            <div className="pie">
         <EventGenre events={events} />
         </div>
         
            <div className="scatter-container">

              <div className="scatter-title">Cities</div>

            <ResponsiveContainer height={284}>
              
            
              <ScatterChart
              
              
                margin={{
                  top: 5, right: 42, bottom: -15, left: 10,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis type="category" dataKey="none" name="city" />
                <YAxis type="number" dataKey="number" name="number of events" stroke="#828D99" axisLine={false} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={this.getData()} fill="#FFFFFF" />
                
                
              </ScatterChart>
            </ResponsiveContainer>
            </div>
        </div>
        <div className="event-list">
          <EventList events={this.state.events.slice(0, numberOfEvents)} />
          </div>
          </div>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;