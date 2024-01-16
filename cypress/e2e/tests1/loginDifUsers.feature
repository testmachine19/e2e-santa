Feature: User login on secret santa website

Scenario: User log in successfully 
Given user is on secret santa login page
When user logs in as "<login>" with "<password>"
Then user is on dashboard page 
Examples:
    | login | password |
    | funnyjoything+test@gmail.com  | test1234  | 
    | funnyjoything+test1@gmail.com  | test1234  | 

Scenario: User log in successfully 
Given user is on secret santa login page
When user logs in as "<login>" with "<password>"
Then user is on dashboard page 
Examples:
    | login | password |
    | funnyjoything+test1@gmail.com  | test1234  | 
    | funnyjoything+test2@gmail.com  | test1234  |     

Scenario: User log in successfully 
Given user is on secret santa login page
When user logs in as "<login>" with "<password>"
Then user is on dashboard page 
Examples:
    | login | password |
    | funnyjoything+test2@gmail.com  | test1234  | 
    | funnyjoything+test3@gmail.com  | test1234  |       