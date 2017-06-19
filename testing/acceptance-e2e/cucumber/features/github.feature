Feature: GitHub repo (hello-js-world)
    As a tester of Cucumber-js
    I want to be able to access my GitHub profile
    So that I can see if the current repo is available

    Scenario: Access my GitHub repos
        Given I am on my GitHub profile
        When I click on "Repositories"
        Then I should see my repos

    Scenario: Access the current repo
        Given I can see all my repos
        When I click on "hello-js-world"
        Then I should see the repo
