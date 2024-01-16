Feature: User login on secret santa website

Scenario: User log in successfully 
Given user is on secret santa login page
When user logs in with table
|login|password|
|funnyjoything+test@gmail.com|test1234|
Then user is on dashboard page 
Then the user enters a new box name
    And the user selects the sixth icon
    And the user sets the gift price toggle
    And the user enters the max amount 
    And the user selects the currency 
    And the user proceeds to the next step
    Then the user click on box
    And invite other people
    And click on the run button
    Then run the box