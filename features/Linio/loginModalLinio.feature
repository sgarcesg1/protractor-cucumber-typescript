
Feature: Login Linio

  #As i user i need to Login Linio
  #a) happy path
  #b) falle (campos requeridos)
  #c) limites (nombre muy largo, tipo de dato)
  #d) olvide la contraseña
  #e) Login With Facebook and google


  @laurap
  Scenario: Login Linio space forgot the password

    Given the user is on "LoginLinio" page
    When the user Mouse hover in the "perfil Icon"
    And the user wait
    And the user click on "signing Sesion"
    And the user click on "forgot Passwors"
    And the user click on "email Forgot"
    And the user write in "email Forgot" "laura.jazmin28@gmail.com" 
    #And I click recaptcha 
    And the user click on "restart Password"
    Then the user can see a message with the text "El valor del captcha no es válido." in "message Mistake "

  @laurap
  Scenario: Login Linio successfully ok
    Given the user is on "LoginLinio" page
    When the user Mouse hover in the "perfil Icon"
    And the user wait
    And the user click on "signing Sesion"
    And the user click on "email Field"
    And the user write in "email Field" "laura.jazmin28@gmail.com"
    And the user click on "password Field"
    And the user write in "password Field" "feliz4916"
    And the user click on "login Button"
    Then the user can see a message with the text "¡Hola Laura!" in "startSection"

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

  @laurap
  Scenario: Login Linio space empty fault scenario
    Given the user is on "LoginLinio" page
    When the user Mouse hover in the "perfil Icon"
    And the user wait
    And the user click on "signing Sesion"
    And the user click on "email Field"
    And the user write in "email Field" "laura.jazmin28@gmail.com"
    #When I select the "Contraseña" with on click
    #And I write in the password <contraseña>
    And the user click on "login Button"
    Then the user can see a message with the text "Please fill out this fiel" 
    


 