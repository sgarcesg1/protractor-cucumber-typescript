Feature: Add Doctor Feature
    Background:
        Given I am at the home page
        When I click on the "Add Doctor"
        Then I should be directed to the "Add Doctor" page

    @Test
    Scenario Outline: Happy Path
        Given I am at the add doctor page
        When I type "<Name>" on the "Name Field"
        And I type "<Last_Name>" on the "Last Name Field"
        And I type "<Telephone>" on the "Telephone Field"
        And I select "<Identification_Type>" on the "Identification Type Field"
        And I type "<Identification_Number>" on the "Identification Field"
        And I click on "Save Button"
        Then Confirmation Message "Datos guardados exitosamente" should be displayed
        Examples:
            | Name     | Last_Name | Telephone | Identification_Type   | Identification_Number |
            | Santiago | Garces    | 12345678  | Cédula de extrangería | 0987654               |
