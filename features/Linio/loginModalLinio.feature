
Feature: Login Linio

  #As i user i need to Login Linio
  #a) happy path
  #b) falle (campos requeridos)
  #c) limites (nombre muy largo, tipo de dato)
  #d) olvide la contraseña
  #e) Login With Facebook and google


  #@laurap
  Scenario: Login Linio space forgot the password
    Given I go to the Linio page
    When I put Mouse hover in the Perfil Icon
    And I select the "inicia Sesión" with on click
    And I select the "Olvidé mi contraseña" with on click
    And I select the "Forgot Email" with on click
    And I write in the Forgot email "laura.jazmin28@gmail.com"
    #And I click recaptcha 
    And I click on button "Restablecer contraseña"
    Then show in a box whit message "El valor del captcha no es válido." 

  #@laurap
  Scenario: Login Linio successfully ok
    Given I go to the Linio page
    When I put Mouse hover in the Perfil Icon
    When I select the "inicia Sesión" with on click
    When I select the "Email" with on click
    And I write in the email "laura.jazmin28@gmail.com"
    When I select the "Contraseña" with on click
    And I write in the password "feliz4916"
    And I click on button "Iniciar Sesión Segura"
    Then show in the subHeader "¡Hola Laura!"

  #@laurap
  Scenario Outline: Login Linio successfully no ok REVISAR
    Given I go to the Linio page
    When I put Mouse hover in the Perfil Icon
    When I select the "inicia Sesión" with on click
    When I select the "Email" with on click
    And I write in the email <email>
    When I select the "Contraseña" with on click
    And I write in the password <contraseña>
    And I click on button "Iniciar Sesión Segura"
    Then show in the subHeader "¡Hola Laura!"

    Examples:
      | email                    | contraseña |
      | laura.jazmin28@gmail.com | feliz4916  |

  #@laurap
  Scenario: Login Linio space empty fault scenario
    Given I go to the Linio page
    When I put Mouse hover in the Perfil Icon
    When I select the "inicia Sesión" with on click
    When I select the "Email" with on click
    And I write in the email <email>
    When I select the "Contraseña" with on click
    And I write in the password <contraseña>
    And I click on button "Iniciar Sesión Segura"
    Then show in a box whit message "Please fill out this fiel" 
    


 