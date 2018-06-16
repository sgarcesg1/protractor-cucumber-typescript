import { $, ElementFinder } from "protractor";

export class HomePage {

    /* Here we enter the URL that we want to be opened*/
    
    public URL = "http://evening-woodland-2196.herokuapp.com/sgarcesg/home";

    public addDoctorItem: ElementFinder;

    constructor() {
        this.addDoctorItem = $(".list-group-item[href=addDoctor]");
    }
}
