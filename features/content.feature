Feature: Display notification contents properly
    As the marketing representative, I need rules to display the notification contents properly.

    Scenario: Default contents
        Given there is a notification
        When the content rules are executed
        Then the notification has "HEADER"
            And the notification has "FOOTER"
            And the notification has "UNSUBSCRIBE"