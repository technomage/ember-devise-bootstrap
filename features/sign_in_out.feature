
Feature: Users should be able to sign in and out of the system as well as create accounts by signing up for one, and be able to use facebook to sign in and to sign up

  Background:
    Given no session

  @javascript
  Scenario: Sign up for an account
    Given no users are defined
    And I am on the home page
    When I open the sign up form
    And enter credentials for a new account
    Then I should see the home page without a sign up form showing
    And I should be able to sign in with the new account

  @javascript
  Scenario: Sign in using facebook when not already signed in to facebook
    Given I am not signed in to facebook
    And I am on the home page
    When I elect to sign in using facebook
    Then I should see the facebook sign in page
    When I enter facebook credentials
    Then I should see the home page without a sign in form showing
    And I should be signed into the facebook account for this app

  @javascript
  Scenario: Sign in using facebook when already signed in to facebook
    Given I am signed in to facebook
    Given I am on the home page
    When I elect to sign in using facebook
    Then I should see the home page without a sign in form showing
    And I should be signed into the facebook account for this app

  @javascript
  Scenario: Request a password reset

  @javascript
  Scenario: Remember a login across sessions

  # Cases that should fail

  @javascript
  Scenario: Sign in with a bad email

  @javascript
  Scenario: Sign in with a bad password

