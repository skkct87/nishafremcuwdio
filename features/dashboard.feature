Feature: Verify Dashboard & Screens


@run @dashboard 

    Scenario: Login to website & verify Dashboard & Screens

    Given User navigate to Whitehall Finance website
    When User insert credentials & login
    Then User can See Dashboard & Screens
    Then User will logout
    