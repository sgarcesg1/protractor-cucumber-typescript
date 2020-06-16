Feature: Add a Cart From Product For Searchbar

    #@laurap
    Scenario: Add a Cart Linio successfully from search bar

        Given I go to the Linio page
        When I select "searchbar" with on click
        When I write in the searchbar "celulares"
        And I click in the option "celulares xiaomi"
        And I click in the product "Celular Xiaomi Redmi Note 9s 64GB Blanco"
        And I click in the add button "Añadir a Carrito"
        And I click in the go to car button "ir a carrito"
        Then show title "CARRITO DE COMPRAS"
        And show title summary "RESUMEN DE TU PEDIDO"
        And show  product "Celular Xiaomi Redmi Note 9s 64GB Blanco"

    @laurap
    Scenario: Add a Car Linio successfully from search bar specific brand

        Given I go to the Linio page
        When I select "searchbar" with on click
        And I write in the searchbar "celular samsung"
        And I click in the option "celular samsung"
        And I click in the product "Celular Samsung Galaxy A30s"
        And I click in the add button "Añadir a Carrito"
        And I click in the go to car button "ir a carrito"
        Then show title "CARRITO DE COMPRAS"
        And show title summary "RESUMEN DE TU PEDIDO"
        And show  product "Celular Samsung Galaxy A30s"


    Scenario: Add a Car Linio successfully from search bar specific store

        Given I go to the Linio page
        When I click in the searchbar
        And I write in the searchbar "celular samsung"
        And I click in the option "celular samsung en Tienda Oficial Samsung"
        And I click in the product "Celular Samsung A30s 64GB Negro"
        And I click in the button "Añadir a Carrito"
        And I click in the button "ir a carrito"
        Then show title "CARRITO DE COMPRAS"
        And show title "RESUMEN DE TU PEDIDO"
        And show  product "Celular Samsung A30s 64GB Negro"



    Scenario: Add a Cart from search bar WRONG WRITTEN WORD

        Given I go to the Linio page
        When I click in the searchbar
        And I write in the searchbar "AADDDDDOOO"
        And I click in the lupa icon
        Then show title Nuestro gurú de compras no encontró resultados para: "AADDDDDOOO"
        And show message Te recomendamos verificar la ortografía o intentar con otra palabra.
        And show box with Categories





