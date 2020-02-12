/*import { browser, protractor, By } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
import { LoginModalPage } from "../pages/loginmodalPage";
import { create } from "domain";
const { Given, When, Then } = require("cucumber");
var expect = require('chai').expect;

const loginmodalPage: LoginModalPage = new LoginModalPage();


Given(/^I go to the falabela page$/, async () => {
  await browser.get(LoginModalPage.URL);
});

When(/^I select the "inicia Sesion" with on click$/, async () => {
  await loginmodalPage.openlogin.click();
});

When(/^I click in the "No Gracias"$/, async () => {
  await browser.sleep(3000);
  await loginmodalPage.popUp.click();  
});

When(/^I select the "ingrasa tu email" with on click$/, async () => {
  await loginmodalPage.emailField.click();
});

When(/^I write in the ingresa tu email "(.*)" correo de inicio$/, async (des) => {
  await loginmodalPage.emailField.sendKeys(des);
});

When(/^I select the "ingrasa tu contraseña" with on click$/, async () => {
  await loginmodalPage.passwordField.click();
  
});

When(/^I write in the constraseña "(.*)"$/, async (des) => {
  await loginmodalPage.passwordField.sendKeys(des);
  await browser.sleep(3000);
});

When(/^I click on button "Iniciar Sesión"$/, async () => {
  await loginmodalPage.loginButton.click();
  await browser.sleep(3000);
});

Then(/^show in the ingresa tu email Bienvenida "(.*)"$/, async (expectedName) => {
  await browser.sleep(3000);
  var actualName = await loginmodalPage.startSection.getText();
  expect(actualName).to.be.equal(expectedName);
  
});*/