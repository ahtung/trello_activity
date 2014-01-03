Feature: A card
  In order to demonstrate trello_activity
  As a Trello member and developer
  I need to be able to calculate the completion time of a card

  Scenario: Demonstrate card completion time
    When I visit homepage
     And I click on 'Connect To Trello'
    Then I should see the correct completion time