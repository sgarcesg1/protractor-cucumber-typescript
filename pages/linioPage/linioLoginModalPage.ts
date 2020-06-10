import { $, ElementFinder } from "protractor";
import { async } from "q";
// import {  MultiSelect } from "../pages/multiSelect";


export class LinioLoginModalPage {
    static URL = "https://www.linio.com.co/";

    public perfilIcon : ElementFinder;
    public signingSesion: ElementFinder;
    public emailField: ElementFinder;
    public passwordField: ElementFinder;
    public loginButton: ElementFinder;
    public startSection: ElementFinder;

    public signingSesionTwo: ElementFinder;
    public forgotPasswors: ElementFinder;
    public emailForgot: ElementFinder;
    public recapcha: ElementFinder;
    public restartPassword : ElementFinder;
    public messageMistake : ElementFinder;


    constructor() {

        this.perfilIcon = $("[href='/account']");
        this.signingSesion = $("[href='/account/login']");
        this.emailField =  $(".col-sm-6 > #login_form_email");
        this.passwordField = $("#login_form_password");
        this.loginButton = $("#login-form .btn.btn-security.col-xs-12");
        this.startSection = $(".user-welcome.body-base-sm");

        this.signingSesionTwo = $("[href='/account/login']");
        this.forgotPasswors = $(".link-low-sm")
        this.emailForgot = $ ("#forgot_password_form_email")
        // this.recapcha = $(".recaptcha-checkbox-border")
        this.restartPassword = $(".btn.btn-primary.col-xs-12")
        this.messageMistake = $(".alert-text")


        // $(".fb-masthead-login__name strong");


    }
}



