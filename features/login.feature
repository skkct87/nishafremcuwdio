Feature: Login   

@logintest

Scenario: Login & logout

Given user navigates to the website
When insert Credentials
Then url should open & login in website
Then logout from website
