#@laurap
  Scenario Outline: Search categories Linio successfully
    Given I go to the Linio page
    When I put Mouse hover in the Categories Icon
    And I put Mouse hover in the Categories <category>
    And the user click on item <item> inside <subCategory>
    Then show catalogue title
    Examples:
      | category    | subCategory  | item     |
      | Moda        | Ropa Mujer   | Vestidos |
      | Computacion | Recomendados | Hp       |



#@laurap
  Scenario Outline: Search categories Linio successfully
    Given I go to the Linio page
    When I put Mouse hover in the Categories Icon
    And I put Mouse hover in the Categories <category>
    And the user click on item <item> inside <subCategory>
    Then show catalogue title
    Examples:
      | category    | subCategory  | item     |
      | Moda        | Ropa Mujer   | Vestidos |
      | Computacion | Recomendados | Hp       |


 #@laurap
  Scenario Outline: Search categories Linio successfully
    Given I go to the Linio page
    When I put Mouse hover in the Categories Icon
    And I put Mouse hover in the Categories <category>
    And the user click on item <item> inside <subCategory>
    Then show catalogue title
    Examples:
      | category    | subCategory  | item     |
      | Moda        | Ropa Mujer   | Vestidos |
      | Computacion | Recomendados | Hp       |

