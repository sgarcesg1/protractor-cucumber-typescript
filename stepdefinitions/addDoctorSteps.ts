import { browser, protractor } from "protractor";
import { AddDoctorPage } from "../pages/AddDoctorPage";
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const addDoctor = new AddDoctorPage();

async function redirectToAddDoctorPageIfRequired() {
    let currentPage = await browser.getCurrentUrl();
    if(currentPage !== addDoctor.URL) {
        await browser.navigate().to(addDoctor.URL);
    } //else do nothing
    await expect(browser.getTitle()).to.eventually.equal(addDoctor.TITLE);
}

Given(/^I am at the add doctor page/, redirectToAddDoctorPageIfRequired);

Then(/^I should be directed to the "Add Doctor" page/, redirectToAddDoctorPageIfRequired);

When(/^I type "([^"]*)" on the "Name Field"/, async (name) => {
    await addDoctor.name.sendKeys(name);
});

When(/^I type "([^"]*)" on the "Last Name Field"/, async (lastName) => {
    await addDoctor.lastName.sendKeys(lastName);
});

When(/^I type "([^"]*)" on the "Telephone Field"/, async (telephone) => {
    await addDoctor.telephone.sendKeys(telephone);
});

When(/^I select "([^"]*)" on the "Identification Type Field"/, async (identificationType) => {
    let option = addDoctor.getIdentificationTypeOption(identificationType)
    await option.click();
});

When(/^I type "([^"]*)" on the "Identification Field"/, async (identification) => {
    await addDoctor.identification.sendKeys(identification);
    await pause(10000)
});

function pause(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}