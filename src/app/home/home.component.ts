import { Component, ElementRef, ViewChild } from "@angular/core";
import { CommonService } from "../services/commonservice/common-service.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    @ViewChild('uploadpopup', { static: false }) uploadpopup: ElementRef | undefined;
    constructor(
        private CF: CommonService
    ) { }
    public openmodal(type: string) {
        this.CF.OpenPopup(this.uploadpopup, 'My_Popup')
    }
}