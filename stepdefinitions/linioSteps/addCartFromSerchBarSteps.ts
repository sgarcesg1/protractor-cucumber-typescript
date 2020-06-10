
import { browser, protractor, By, until } from "protractor";
import { SearchPageObject } from "../../pages/searchPage";
import { AddCartFromSearchBarPage } from "../../pages/linioPage/addCartFromSearchBarPage";
import { create } from "domain";
const { Given, When, Then } = require("cucumber");
const expect = require('chai').expect; // revisar el tipo de variable

const addCartFromSearchBarPage: AddCartFromSearchBarPage = new AddCartFromSearchBarPage();
let option;

// Scenario Forgot Password

Given(/^I go to the Linio page$/, async () => {
  await browser.get(AddCartFromSearchBarPage.URL);
});

When(/^I select "searchbar" with on click$/, async () => {
  await addCartFromSearchBarPage.searchBar.click();
});

When(/^I write in the searchbar "(.*)"$/, async (des) => {
  await addCartFromSearchBarPage.searchBar.sendKeys(des);
});

When(/^I click in the option "(.*)"$/, async (des) => {
  await browser.sleep(2000);
  option = await addCartFromSearchBarPage.menulinio.selectDesiredProduct(des);
  await option.click();
});

When(/^I click in the product "(.*)"$/, async (des) => {
  
  option = await addCartFromSearchBarPage.producLinio.selectWishProduct(des);
  await option.click();
});

When(/^I click in the add button "Añadir a Carrito"$/, async () => {
  await browser.sleep(3000);
  await addCartFromSearchBarPage.addButton.click();
});

When(/^I click in the go to car button "ir a carrito"$/, async () => {
  await browser.sleep(3000);
  await addCartFromSearchBarPage.goTocart.click();
});

Then(/^show title "CARRITO DE COMPRAS"$/, async (expectedName) => {
  await browser.sleep(3000);
  const actualName = await addCartFromSearchBarPage.titleCar.getText();
  expect(actualName).to.be.equal(expectedName);
});



/*
// Perfil Icon
When(/^I put Mouse hover in the Perfil Icon$/, async () => {
  const dropDown = await linioLoginModalPage.perfilIcon;
  browser.actions().mouseMove(dropDown).perform();
  await browser.sleep(3000);
});

When(/^I select the "inicia Sesión" with on click$/, async () => {
  await browser.sleep(3000);
  await linioLoginModalPage.signingSesion.click();
});

When(/^I select the "Olvidé mi contraseña" with on click$/, async () => {
  await linioLoginModalPage.forgotPasswors.click();
  await browser.sleep(3000);
});

When(/^I select the "Forgot Email" with on click$/, async () => {
  await linioLoginModalPage.emailForgot.click();
  await browser.sleep(3000);
});

When(/^I write in the Forgot email "(.*)"$/, async (des) => {
  await linioLoginModalPage.emailForgot.sendKeys(des);
});

/*When(/^I click recaptcha$/, async () => {
  await linioLoginModalPage.recapcha.click();
});



When(/^I click on button "Restablecer contraseña"$/, async () => {
  await linioLoginModalPage.restartPassword.click();
});

Then(/^show in a box whit message "(.*)"$/, async (expectedName) => {
  await browser.sleep(3000);
  const actualName = await linioLoginModalPage.messageMistake.getText();
  expect(actualName).to.be.equal(expectedName);
});


When(/^I select the "Email" with on click$/, async () => {
  await linioLoginModalPage.emailField.click();
});

When(/^I write in the email "(.*)"$/, async (des) => {
  await linioLoginModalPage.emailField.sendKeys(des);
});

When(/^I select the "Contraseña" with on click$/, async () => {
  await linioLoginModalPage.passwordField.click();
});

When(/^I write in the password "(.*)"$/, async (des) => {
  await linioLoginModalPage.passwordField.sendKeys(des);
  await browser.sleep(3000);
});

When(/^I click on button "Iniciar Sesión Segura"$/, async () => {
  await browser.sleep(3000);
  await linioLoginModalPage.loginButton.click();
});

Then(/^show in the subHeader "(.*)"$/, async (expectedName) => {
  await browser.sleep(3000);
  const actualName = await linioLoginModalPage.startSection.getText();
  expect(actualName).to.be.equal(expectedName);
  await browser.sleep(3000);
});
*/