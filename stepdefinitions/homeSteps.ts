/* Given I am at the home page
        When I click on the "Add Doctor"
        Then I should be directed to the " Add Doctor" page */

import { browser, protractor } from "protractor";
import { HomePage} from "../pages/homePage";
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const home: HomePage = new HomePage();

/* This is to be able to open the page were we will be working on*/

Given(/^I am at the home page/, async () =>{
 await browser.navigate().to(home.URL)
});


When(/^I click on the "Add Doctor"/, async () => {
    await home.addDoctorItem.click();
});