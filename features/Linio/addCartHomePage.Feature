Feature: add a car from Homepage

#@laurap
  Scenario: Search Homepage successfully

    Given I go to the Linio page
    When I put Mouse hover in the Categories Icon
    And I put Mouse hover in the Categories "Celulares"    
    And I click in the product "Celular Samsung A30s 64GB Negro"  
    And I click in the button "Añadir a Carrito"
    And I click in the button "ir a carrito"
    Then show title "CARRITO DE COMPRAS"
    And show title "RESUMEN DE TU PEDIDO"
    And show  product "Celular Samsung A30s 64GB Negro"