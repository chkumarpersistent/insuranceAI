import { Component, ElementRef, ViewChild } from "@angular/core";
import { CommonService } from "../services/commonservice/common-service.service";
import { FileHandle } from "./dragDrop.directive";
import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = 'AIzaSyBEip1TZnfHNbMXlImJ1jr7ZV136BhcKII';
const genAI = new GoogleGenerativeAI(API_KEY);
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
    public response: any = null;
    public finalsubmmited: boolean = false;
    constructor(
        private CF: CommonService
    ) { }
    public openmodal(type: string) {
        this.response = null;
        this.submmited = false;
        this.finalsubmmited = false;
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
        this.response = null;
        this.files = this.files.filter(x => x !== file);
    }
    public upload(): void {
        this.submmited = true;
        this.ImageWithText('extract information and Summary about the picture as summary and return with "Hospital Name" "Patient Name" "Doctor Name", "Summary" and "Network Hospital" in JSON format from above image');

    }
    private async ImageWithText(prompt: string) {
        this.submmited = true;
        // For text-and-images input (multimodal), use the gemini-pro-vision model
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
        const imageParts: any = await Promise.all(
            Array.from(this.selectedFiles).map((file) => this.fileToGenerativePart(file))
        );
        try {
            const result = await model.generateContent([prompt, ...imageParts]);
            const response = await result.response;
            const text = response.text();


            this.response = this.stringfy(text);
            console.log(this.response)
            console.log(typeof this.response)
            // this.content = text;
            this.submmited = false;
        } catch (error) {
            this.submmited = false;
            alert('Something went wrong, Try again')
        }
    }
    // Converts a File object to a GoogleGenerativeAI.Part object.
    private async fileToGenerativePart(file: any) {
        const base64EncodedDataPromise = new Promise((resolve) => {
            const reader: any = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.readAsDataURL(file);
        });
        return {
            inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
    }
    public submit() {
        this.finalsubmmited = true;
        setTimeout(() => {
            this.finalsubmmited = false;
            this.CF.CloseModal()
            this.CF.SwalSuccess('Thank you, <br/>We will call you back.')
        }, 1000);

    }

    private stringfy(text: string) {
        try {
            const regexStart = new RegExp('```json', 'g');
            const regexEnd = new RegExp('```', 'g');
            return JSON.parse(text.replace(regexStart, '').replace(regexEnd, ''));

        } catch (error) {
            return text
        }
    }
}