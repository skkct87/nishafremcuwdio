Feature: Login   

@logintest

Scenario: Login & logout

Given user navigates to the website
When Insert Credential
Then url should open & login in website
Then logout from website
