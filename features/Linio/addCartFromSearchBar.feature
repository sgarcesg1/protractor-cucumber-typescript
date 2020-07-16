Feature: Add a Cart From Product For Searchbar

    @laurap
    Scenario: Add a Car Linio successfully from search bar

        Given the user is on "Linio" page
        And the user wait
        When the user click on "search bar"
        When the user write in "Search bar" "celulares"
        And the user wait
        And the user click on the menu item "celulares xiaomi"
        And the user wait
        And the user click on the product "Celular Xiaomi Redmi Note 9 64GB Gris"
        And the user wait
        And the user click on "add Button"
        And the user wait
        And the user click on "go To Cart"
        And the user wait
        Then the user can see a message with the text "CARRITO DE COMPRAS" in "shoppingCart"
        And the user can see a message with the text "RESUMEN DE TU PEDIDO" in "summary title"
        And the user can see a message with the text it contains "Celular Xiaomi Redmi Note 9 64GB Gris" in "product name"


    #@laurap
    Scenario Outline:  Add a Car Linio successfully from search bar
        Given I go to the Linio page
        When I select "searchbar" with on click
        When I write in the searchbar "<keyWord>"
        And I click in the option "<option>"
        And I click in the product "<product>"
        And I click in the add button "Añadir a Carrito"
        And I click in the go to car button "ir a carrito"
        Then show title "CARRITO DE COMPRAS"
        And show title summary "RESUMEN DE TU PEDIDO"
        And show  product "<product>"


        Examples:
            | keyWord         | option                                    | product                                    |
            | celulares       | celulares xiaomi                          | Celular Xiaomi Mi Note 10 Lite 6GB 64GB... |
            | celular samsung | celular samsung                           | Celular Samsung Galaxy A30s                |
            #| celular  |celulares en Tienda Oficial Huawei | Celular Huawei Y5 2019 - Cafe Carameloo|
    

    @laurap
        Scenario: Add a Car Linio successfully from search bar specific store
        #este scenario no es relevante
        Given the user is on "Linio" page
        And the user wait
        When the user click on "search bar"
        And the user write in "Search bar" "celular"
        And the user wait
        And the user click on the menu item "celular en Tienda Oficial Motorola"
        And the user wait
        And the user click on the product "Motorola One Hyper 128GB"
        And the user wait
        And the user click on "add Button"
        And the user wait
        And the user click on "go To Cart"
        And the user wait
        Then the user can see a message with the text "CARRITO DE COMPRAS" in "shoppingCart"
        And the user can see a message with the text "RESUMEN DE TU PEDIDO" in "summary title"
        And the user can see a message with the which specifically "Motorola One Hyper 128GB" in "product name"


    @laurap
    Scenario: Add a Cart from search bar WRONG WRITTEN WORD

        Given the user is on "Linio" page
        When the user click on "search bar"
        And the user write in "Search bar" "AADDDDDOOO"
        And the user wait
        And the user click on "search icon"
        Then the user can see a message with the text it contains "AADDDDDOOO" in "mistakeWord"
        And the user can see a message with the text "Te recomendamos verificar la ortografía o intentar con otra palabra." in "mistake message"






