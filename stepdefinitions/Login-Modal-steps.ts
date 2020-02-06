import { browser, ElementFinder } from "protractor";
import {LoginmodalPageObject } from "../pages/Login-Modal-page";
import { Then } from "cucumber";
const { Given, When, setDefaultTimeout } = require("cucumber");
import * as chai from 'chai'
chai.use(require("chai-as-promised"))
const expect = chai.expect;
setDefaultTimeout(10000);

const Loginmodal: LoginmodalPageObject = new LoginmodalPageObject();
//Mappear pasos de los features

Given(/^the user is on the Falabella page$/, async () => {
    return await browser.get(LoginmodalPageObject.url)
});

When(/^the user click on button Inicia Sesión$/, async () => {
    await Loginmodal.iniciaSesión.click()  
});

When(/the user enter his e-mail "(.*?)"$/, async (emailField) => {
    await Loginmodal.emailField.sendKeys(emailField)
});

When(/^the user enter his password "(.*?)"$/, async (passWordField) => {
    await Loginmodal.passWordField.sendKeys(passWordField)
});

When(/^the user click on button Iniciar Sesión$/, async () => {
    await Loginmodal.loginButton.click()  
});

When(/^the user wait$/, async () => {
    await browser.sleep(3000)
});


//Assertions
Then(/^can be seen in the header a Message with the text "(.*?)"$/, async (expectedMessage) => {
    let actualMessage = await Loginmodal.bienvenido.getText()
    expect(actualMessage.replace('\n', '')).to.be.equals(expectedMessage)
});

When(/^the user should be click on the word Mao$/, async () => {
    await Loginmodal.mao.click()  
});

Then(/^can be seen a table with sometime options$/, async () => {
    let actualTable = await Loginmodal.table.isDisplayed()
    expect(actualTable).to.be.true
});

Then(/^the first option is "(.*?)"$/, async (expectedMessage) => {
    let actualMessage = await Loginmodal.firstOption.getText()
    expect(actualMessage).to.be.equals(expectedMessage)
});

Then(/^the second option is "(.*?)"$/, async (expectedMessage) => {
    let actualMessage = await Loginmodal.secondOption.getText()
    expect(actualMessage).to.be.equals(expectedMessage)
});

Then(/^the third option is "(.*?)"$/, async (expectedMessage) => {
    let actualMessage = await Loginmodal.thirdOption.getText()
    expect(actualMessage).to.be.equals(expectedMessage)
});

When(/^the user await$/, async () => {
    await browser.sleep(1000)
});