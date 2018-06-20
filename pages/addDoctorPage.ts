import { $, ElementFinder, By } from "protractor";

export class AddDoctorPage {

    /* Here we enter the URL that we want to be opened*/
    
    public URL = "http://evening-woodland-2196.herokuapp.com/sgarcesg/addDoctor";
    public TITLE = "PSL - Agregar Doctor";

    public name: ElementFinder;
    public lastName: ElementFinder;
    public telephone: ElementFinder;
    public identificationType: ElementFinder;
    public identification: ElementFinder;

    constructor() {
        this.name = $("#name");
        this.lastName = $("#last_name");
        this.telephone = $("#telephone");
        this.identificationType = $("#identification_type");
        this.identification = $("#identification");
    }

    getIdentificationTypeOption(type: string) {
        //notice the usage of By.css when we require to use especific CSS of Xpath selectors
        return $("#identification_type").element(By.css(`option[value="${type}"]`));
    }
}
