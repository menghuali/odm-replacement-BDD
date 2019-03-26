Feature: Recognize the characters of booking, guest, trip, flight and etc
    As the marketing representative, I need rules to recognize ecognize the characters of booking, guest, trip, flight and etc.

    Scenario Outline: Recongize booking channel by PCC
        Given the PCC of a booking is "<PCC>"
        When the cognition rules are executed
        Then the booking channel should be "<expected_booking_channel>"

        Examples:
            | PCC           | expected_booking_channel |
            | TTY           | GDS                      |
            | LCW           | AIRMILES                 |
            | Anything else | NORMAL                   |

    Scenario Outline: Recognize a child guest
        Given a guest has SSR "<SSR>"
        When the cognition rules are executed
        Then it should be "<child_or_not>" that the guest is a child

        Examples:
            | SSR           | child_or_not |
            | CHLD          | true         |
            | Anything else | false        |