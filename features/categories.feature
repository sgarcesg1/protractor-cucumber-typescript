Feature: Search categories

    
    Scenario: Search categories Samsung Watch
        Given the user is on the Falabella page
        When the user click on button categorias
        And the user click on category "Tecnología"
        And the user click on item "Samsung Watch" inside "Smartwatch"
        And the user wait

    @laurap
    Scenario: Search categories
        Given the user is on the Falabella page
        When the user click on button categorias
        And the user click on category "Planes en casa"
        And the user click on item "Vino y Bar" inside "Cocina Divertida"
        And the user wait