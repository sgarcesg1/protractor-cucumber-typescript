Feature: add a car from Categories options

#@laurap
  Scenario: Search categories Linio successfully

    Given I go to the Linio page
    When I put Mouse hover in the Categories Icon
    And I put Mouse hover in the Categories "Celulares y Tablets"
    And the user click on item "Gama media" inside "Celulares y Smartphones"
    #Then show catalogue title
    And I click in the product "Celular Samsung A30s 64GB Negro"  
    And I click in the button "Añadir a Carrito"
    And I click in the button "ir a carrito"
    Then show title "CARRITO DE COMPRAS"
    And show title "RESUMEN DE TU PEDIDO"
    And show  product "Celular Samsung A30s 64GB Negro"


#@laurap
  Scenario: Search categories Linio only Category

    Given I go to the Linio page
    When I put Mouse hover in the Categories Icon
    And I click on item "Celulares y Tablets"  
    And I click in the product "Celular Samsung A30s 64GB Negro"  
    And I click in the button "Añadir a Carrito"
    And I click in the button "ir a carrito"
    Then show title "CARRITO DE COMPRAS"
    And show title "RESUMEN DE TU PEDIDO"
    And show  product "Celular Samsung A30s 64GB Negro"


  Scenario: Search categories Linio only subCategory

    Given I go to the Linio page
    When I put Mouse hover in the Categories Icon
    And I use Mouse hover in the item "Celulares y Tablets"
    And I click on item "Celulares y Smartphones" 
    And I click in the product "Celular Samsung A30s 64GB Negro"  
    And I click in the button "Añadir a Carrito"
    And I click in the button "ir a carrito"
    Then show title "CARRITO DE COMPRAS"
    And show title "RESUMEN DE TU PEDIDO"
    And show  product "Celular Samsung A30s 64GB Negro"


 