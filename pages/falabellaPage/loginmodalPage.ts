import { $, ElementFinder } from "protractor";
import { async } from "q";
// import {  MultiSelect } from "../pages/multiSelect";


export class LoginModalPage {
    static URL = "https://www.falabella.com.co/falabella-co/#";

    public openlogin: ElementFinder;
    public popUp: ElementFinder;
    public emailField: ElementFinder;
    public passwordField: ElementFinder;
    public loginButton: ElementFinder;
    public startSection: ElementFinder;

    /*public selectDiseases(diseaseHistory) {
        $("button.ui-multiselect").click();
        $("input[value='"+  diseaseHistory  +"']").click();
        $("body").click();
    }*/
   

    constructor() {

        this.openlogin = $(" .fb-masthead-login__user-info__logged");
        this.popUp = $("#acc-alert-deny");
        this.emailField = $("input[name='emailAddress']");
        this.passwordField = $("input[name='password']");
        this.loginButton = $("button[class*='Button__green__1fhy5']");
        this.startSection = $(".re-design-cl__name strong");
        // $(".fb-masthead-login__name strong");
        

    }
}