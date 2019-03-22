Feature: Lounge contents for busiess guests in 24HR
    As a representative from marketing, I'd like to create new lounge content for Business guests.

    Scenario Outline: Business get lounge conent
        Given notification is "<notification>"
            And fare bundle is "<fare>"
            And guest reward tier is "<tier>"
            And it is "<lounge>" that the guest is eligible for lounge
        When I ask whether display COURTESY-BUSINESS-LOUNGE
        Then I expect be told "<answer>"

        Examples:
            | notification | fare     | tier   | lounge | answer |
            | 24HR         | Business | Null   | Yes    | Yes    |
            | 24HR         | Business | Silver | Yes    | Yes    |
            | 24HR         | Business | Gold   | Yes    | No     |
