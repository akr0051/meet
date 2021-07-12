
Feature: specify the number of events

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given the user hasn’t specified any number
    When the main page is open
    Then the number of events will be 32

  Scenario: User can change the number of events they want to see
    Given a list of events is showed to the user
    When the user change the number of events they want to see
    Then the user should see the number of events he/she chose