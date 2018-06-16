Feature: Add Doctor Feature
    Background:
        Given I am at the home page
        When I click on the "Add Doctor"
        Then I should be directed to the " Add Doctor" page

    @Laura
    Scenario Outline: Happy Path
        Given I'm at the " Add Doctor Page"
        # When I type <Name> on the "Name Field"
        # And I type <Last_Name> on the " Last Name Field"
        # And I type <Telephone> on the "Telephone Field"
        # And I select <Identification_Type>
        # And I type <Identification_Number> on the " Identification Field"
        # And I click on "Save Button"
        Then Confirmation Message "Datos guardados exitosamente" should be displayed

# Examples:
#     | Name  | Last_Name | Telephone | Identification_Type   | Identification_Number |
#     | Tim   | OLeary    | 12345678  | Cedula de Ciudadania  | 0987654               |
#     | Laura | Ochoa     | 2654886   | Cedula de Ciudadania  | 1152441101            |
#     | Miley | Oleary    | 260302    | Cedula de Extrangeria | Doggo1212             |

# Scenario: Empty Fields
#     Given I'm at the " Add Doctor Page"
#     When I type <Name> on the "Name Field"
#     And I type <Last_Name> on the " Last Name Field"
#     And I type <Telephone> on the "Telephone Field"
#     And I select <Identification_Type>
#     And I type <Identification_Number> on the " Identification Field"
#     And I click on "Save Button"
#     Then the error <Error_Message> should be displayed

#     Examples:
#         | Name   | Last_Name | Telephone | Identification_Type   | Identification_Number | Error_Messages                                                                                                        |
#         |        |           | 12345678  | Cedula de Ciudadania  |                       | El Campo 'Name' es requerido.\n El Campo 'Last_Name' es requerido.\n El Campo 'Identification_Number' es requerido.\n |
#         | Muriel |           | 654321468 | Cedula de Ciudadania  |                       | El Campo 'Last_Name' es requerido.\n El Campo 'Identification_Number' es requerido.\n                                 |
#         |        | Ochoa     | 2654886   | Cedula de Ciudadania  |                       | El Campo 'Name' es requerido.\n El Campo 'Identification_Number' es requerido.\n                                      |
#         |        |           | 260302    | Cedula de Extrangeria | Doggo1212             | El Campo 'Name' es requerido.\n El Campo 'Last_Name' es requerido.\n                                                  |
#         |        | OLeary    | 65432100  | Cedula de Ciudadania  | 0987654               | El Campo 'Name' es requerido.\n                                                                                       |
#         | Laura  |           | 2654886   | Cedula de Ciudadania  | 1152441101            | El Campo 'Last_Name' es requerido.\n                                                                                  |
#         | Miley  | Oleary    | 260302    | Cedula de Extrangeria |                       | El Campo 'Identification_Number' es requerido.\n                                                                      |
