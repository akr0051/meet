import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let NumberOfEventsWrapper;
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('the user hasn’t specified any number', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
    });

    when('the main page is open', () => {
      AppWrapper = mount(<App />);
    });

    then('the number of events will be 32', () => {
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('a list of events is showed to the user', () => {
      AppWrapper = mount(<App />);
    });

    when('the user change the number of events they want to see', () => {
      AppWrapper.find(".event-number-input").simulate("change", {
        target: { value: 7 }
      })
    });

    then('the user should see the number of events he/she chose', () => {
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(7);

    });
  });

})