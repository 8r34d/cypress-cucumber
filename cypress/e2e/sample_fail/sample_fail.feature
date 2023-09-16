Feature: Sample Fail Feature

  Scenario: Sample Fail Scenario

    Given I visit the home page again
    When I view the home page again
    Then I should see the header "Welcome to limebread" again
    And I should see the paragraph "This site is no longer under construction"