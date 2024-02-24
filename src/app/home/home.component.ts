import { Component, ElementRef, ViewChild } from "@angular/core";
import { CommonService } from "../services/commonservice/common-service.service";
import { FileHandle } from "./dragDrop.directive";
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    @ViewChild('uploadpopup', { static: false }) uploadpopup: ElementRef | undefined;
    public submmited: boolean = false;
    public files: FileHandle[] = [];
    private selectedFiles: any = [];

    constructor(
        private CF: CommonService
    ) { }
    public openmodal(type: string) {
        this.submmited = false;
        this.files = [];
        this.selectedFiles = [];
        this.CF.OpenPopup(this.uploadpopup, 'My_Popup')
    }

    public filesDropped(files: any): void {
        this.files = files;
    }
    public onFileChanged(event: any) {
        this.selectedFiles = event.target.files;
        if (this.selectedFiles && Array.from(this.selectedFiles).length > 0) {
            Array.from(this.selectedFiles).forEach((file: any) => this.files.push({ file, url: URL.createObjectURL(file) }));
        }
    }
    public delete(file: any) {
        this.files = this.files.filter(x => x !== file);
    }
    public upload(): void {
        this.submmited = true;
        console.log(this.files)
        setTimeout(() => {
            this.submmited = false;
        }, 2000);
    }
}