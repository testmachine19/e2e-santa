Feature: User can create a box and run it

  Scenario: User creates a box
    Given the user is logged in
    When the user enters a new box name
    And the user selects the sixth icon
    And the user sets the gift price toggle
    And the user enters the max amount 
    And the user selects the currency 
    And the user proceeds to the next step
    Then the user click on box
    And invite other people
    And click on the run button
    Then run the box