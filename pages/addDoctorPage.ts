import { $, ElementFinder } from "protractor";

export class AddDoctorPage {

    /* Here we enter the URL that we want to be opened*/
    
    public URL = "http://evening-woodland-2196.herokuapp.com/sgarcesg/addDoctor";

    public name: ElementFinder;
    public lastname: ElementFinder;
    public phone: ElementFinder;
    public idType: ElementFinder; /*This is not an ElementFinder but Santiago doesnt want to change it now*/
    public id: ElementFinder;
    public saveButton: ElementFinder;

    constructor() {
        this.name = $("#name");
        this.lastname = $("#last_name");
        this.phone = $("#telephone");
        this.idType = $("");
        this.id = $("#identification");
        this.saveButton =$ (".btn-primary");
    }
    // Method to select the 'selector' in the dropdown menu
    public getIdentificationOption(type){
        return $(`#identification_type option[value="${type}"]`);
    }
    
}