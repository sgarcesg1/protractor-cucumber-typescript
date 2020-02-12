import { $, ElementFinder } from "protractor";
import { async } from "q";
//import {  MultiSelect } from "../pages/multiSelect";


export class SearchFPage {
    static URL = "https://www.falabella.com.co/falabella-co/#";

    public search: ElementFinder;
    public popUp: ElementFinder;    
    public brand: ElementFinder;
    public filter: ElementFinder;
    public selectedBrand: ElementFinder;

    constructor() {

        this.search = $("#searchQuestionSolr");
        this.popUp = $("#acc-alert-deny");
        this.brand = $("#suggestions-list > div:nth-child(2) div:nth-child(3)");
        this.filter = $(".filter-title");
        this.selectedBrand = $(".chip");
    }

}    
