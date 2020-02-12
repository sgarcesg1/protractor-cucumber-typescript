Feature: Login Falabella

  #As i user i need to Login Falabella
  #a) happy path
  #b) falle (campos requeridos)
  #c) limites (nombre muy largo, tipo de dato)



  Scenario: Login Falabella successfully
    Given I go to the falabela page
    When I select the "inicia Sesion" with on click
    And I click in the "No Gracias"
    When I select the "ingrasa tu email" with on click
    And I write in the ingresa tu email "laura.jazmin28@gmail.com" correo de inicio
    When I select the "ingrasa tu contraseña" with on click
    And I write in the constraseña "Hola2889*"
    And I click on button "Iniciar Sesión"
    Then show in the ingresa tu email Bienvenida "Laura Jazmin"
    