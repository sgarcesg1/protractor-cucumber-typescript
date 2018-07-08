/* Given I'm at the "Add Doctor Page"
        When I type <Name> on the "Name Field"
        And I type <Last_Name> on the " Last Name Field"
        And I type <Telephone> on the "Telephone Field"
        And I select <Identification_Type>
        And I type <Identification_Number> on the " Identification Field"
        And I click on "Save Button"
        Then Confirmation Message "Datos guardados exitosamente" should be displayed */

import { browser, protractor } from "protractor";
import { AddDoctorPage } from "../pages/addDoctorPage";
import { when } from "q";
const { Given, When, Then } = require("cucumber");

const addDoctorPage: AddDoctorPage = new AddDoctorPage();

/* This is to be able to open the page were we will be working on*/

Given(/^I'm at the "Add Doctor Page"/, async () => {
    let currenturl = await browser.getCurrentUrl();
    if (currenturl!== addDoctorPage.URL)
    await browser.navigate().to(addDoctorPage.URL)
});

When(/^I type "([^"]*)" on the "Name Field"/, async (name) => {
    await addDoctorPage.name.sendKeys(name);
  //  await pause (10000)
});
When (/^I type "([^"]*)" on the "Last Name Field"/, async (lastname) => {
    await addDoctorPage.lastname.sendKeys(lastname);
    //await pause (10000)
});
When (/^I type "([^"]*)" on the "Telephone Field"/, async (phone) => {
    await addDoctorPage.phone.sendKeys(phone);
    //await pause (10000)
});

When (/^I select "([^"]*)" on the "Identification Type"/, async (idType) => {
   await addDoctorPage.getIdentificationOption(idType).click();
    //await pause (10000)
});

// Identification Type Scenario comes here
When (/^I type "([^"]*)" on the "Identification Field"/, async (id) => {
    await addDoctorPage.id.sendKeys(id);
   // await pause (10000)
});

When (/^I click on "Save Button"/, async () => {
    await addDoctorPage.saveButton.click();
   // await pause (10000)
});
