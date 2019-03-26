Feature: Notification decision service
    As the marketing representative, I need rules to determine the notification eligibility and contents properly.

    Scenario: Omit GDS booking without reward
        Given there is a notification
            And it is "false" that the guest has a reward
            And the PCC of a booking is "TTY"
        When calls notificaton rules
        Then the notification status is "omitted"
            And the omission reason is "Omit the GDS booking because of missing reward"
