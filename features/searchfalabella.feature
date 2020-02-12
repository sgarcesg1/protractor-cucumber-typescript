Feature: search Falabella

  As i user i need to search Falabella
  a) happy path
  b) falle (campos requeridos)
  c) limites (nombre muy largo, tipo de dato)

@laurap
  Scenario: search successfully
    Given I go to the falabela page
    When I click en buscar
    And I click in the "No Gracias"
    And I write "Celular"
    And I select with click in the "Motorola"
   
    
    Then show message "Filtro seleccionado"
    Then show selected brand "Motorola"
    #""""" 
    #Then show product code "Código del producto: 3597096"
    #Then show product brand "Motorolola"
    #Then show qualify box option
    #Then show calculator option
    #Then show color option
    #Then show insurance option
    #Then show availability option
    #Then show quantity option
    #Then show "agregar a bolsa" button


    