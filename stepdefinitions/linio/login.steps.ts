import { browser, ElementFinder } from "protractor";
import { LoginPageObject } from "../../pages/linio/login.page";
import { Then } from "cucumber";
const { Given, When, setDefaultTimeout } = require("cucumber");
import * as chai from 'chai'
chai.use(require("chai-as-promised"))
const expect = chai.expect;
setDefaultTimeout(10000);

let loginPage: LoginPageObject = new LoginPageObject();
//Mappear pasos de los features

Given(/^the user is on the Linio page$/, async () => {
    return await browser.get(LoginPageObject.url)
});

When(/^the user put Mouse over the Perfil Icon$/, async () => {
    const dropDown = await loginPage.perfilIcon;
    browser.actions().mouseMove(dropDown).perform();
    await browser.sleep(3000);
});

When(/^the user click on button Inicia Sesión$/, async () => {
    await loginPage.iniciaSesión.click()
});

When(/the user enter his e-mail "(.*?)"$/, async (emailField) => {
    await loginPage.emailField.sendKeys(emailField)
});

When(/^the user enter his password "(.*?)"$/, async (passWordField) => {
    await loginPage.passWordField.sendKeys(passWordField)
});

When(/^the user click on button Iniciar Sesión segura$/, async () => {
    await loginPage.loginButton.click()
});

When(/^the user wait$/, async () => {
    await browser.sleep(3000)
});

//Assertions
Then(/^can be seen in the header a Message with the text "(.*?)"$/, async (expectedMessage) => {
    let actualMessage = await loginPage.helloUser.getText()
    expect(actualMessage).to.be.equals(expectedMessage)
});

When(/^the user should put Mouse over the Perfil Icon$/, async () => {
    const dropDown = await loginPage.icon;
    browser.actions().mouseMove(dropDown).perform();
    await browser.sleep(3000);
});

Then(/^can be seen a table with some options$/, async () => {
    let actualTable = await loginPage.table.isDisplayed()
    expect(actualTable).to.be.true
});

Then(/^the first option is "(.*?)"$/, async (expectedMessage) => {
    let actualMessage = await loginPage.firstOption.getText()
    expect(actualMessage).to.contains(expectedMessage)
});

Then(/^the second option is "(.*?)"$/, async (expectedMessage) => {
    let actualMessage = await loginPage.secondOption.getText()
    expect(actualMessage).to.contains(expectedMessage)
});

Then(/^the third option is "(.*?)"$/, async (expectedMessage) => {
    let actualMessage = await loginPage.thirdOption.getText()
    expect(actualMessage).to.contains(expectedMessage)
});

Then(/^the fourth option is "(.*?)"$/, async (expectedMessage) => {
    let actualMessage = await loginPage.fourthOption.getText()
    expect(actualMessage).to.contains(expectedMessage)
});

Then(/^the fifth option is "(.*?)"$/, async (expectedMessage) => {
    let actualMessage = await loginPage.fifthOption.getText()
    expect(actualMessage).to.contains(expectedMessage)
});

Then(/^the last option is "(.*?)"$/, async (expectedMessage) => {
    let actualMessage = await loginPage.lastOption.getText()
    expect(actualMessage).to.contains(expectedMessage)
});

When(/^the user await$/, async () => {
    await browser.sleep(1000)
});