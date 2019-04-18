Feature: Determine notification eligibility
    As the marketing representative, I need rules to determine the notification eligiblities.

    Scenario Outline: Omit notifications based on booking channel and reward
        Given there is a notification
            And the booking channel is "<booking_channel>"
            And it is "<has_reward_or_not>" that the guest has a reward
        When eligibility rules are executed
        Then the notification status is "<notification_status>"
            And the omission reason is "<omission>"

        Examples:
            | booking_channel | has_reward_or_not | notification_status | omission                                       |
            | AIRMILES        | yes               | omitted             | Always omit AIRMILES bookings                  |
            | AIRMILES        | no                | omitted             | Always omit AIRMILES bookings                  |
            | GDS             | yes               | immediate           |                                                |
            | GDS             | no                | omitted             | Omit the GDS booking because of missing reward |
            | NORMAL          | yes               | immediate           |                                                |
            | NORMAL          | no                | immediate           |                                                |

    Scenario: Omit notification when a guest is child
        Given there is a notification
            And the guest is child
        When eligibility rules are executed
        Then the notification status is "omitted"
        And the omission reason is "Omit notification because the guest is a child"
    
    Scenario: Always omit WVI booking
        Given there is a notification
            And the booking channel is WVI
            When eligibility rules are executed
            Then the notification status is "omitted"
            And the omission reason is "Always omit WVI booking"