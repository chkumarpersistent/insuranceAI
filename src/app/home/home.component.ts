import { Component, ElementRef, ViewChild } from "@angular/core";
import { CommonService } from "../services/commonservice/common-service.service";
import { FileHandle } from "./dragDrop.directive";
import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = 'AIzaSyBEip1TZnfHNbMXlImJ1jr7ZV136BhcKII';
const genAI = new GoogleGenerativeAI(API_KEY);
const rawcommonquestions = [
    { "question": "What's My Sum insured ?", "answer": null, animate: false },
    { "question": "List All My Benefits of my Policy ?", "answer": null, animate: false },
    { "question": "List all the nearest Hospitals in the network ?", "answer": null, animate: false }
];
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    @ViewChild('claimpopup', { static: false }) claimpopup: ElementRef | undefined;
    @ViewChild('policypopup', { static: false }) policypopup: ElementRef | undefined;
    public submmited: boolean = false;
    public files: FileHandle[] = [];
    private selectedFiles: any = [];
    public response: any = null;
    public finalsubmmited: boolean = false;
    public extractText = 'extract information and Summary about the picture as summary and return with "Hospital Name" "Patient Name" "Doctor Name", "Summary" and "Network Hospital" in JSON format from above image';
    private popuptype: string = '';

    public commonquestions: any = [];
    public showQues: boolean = false;
    public typedQuestion: string = '';
    public typedAnswer: string = '';
    constructor(
        private CF: CommonService
    ) { }
    public openmodal(key: string) {
        this.response = null;
        this.submmited = false;
        this.finalsubmmited = false;
        this.files = [];
        this.selectedFiles = [];
        this.popuptype = key;
        this.resetQus();
        switch (key) {
            case 'claim':
                this.CF.OpenPopup(this.claimpopup, 'My_Popup')
                break;
            default:
                this.showQuestions();
                this.CF.OpenPopup(this.policypopup, 'My_Popup');
                this.resetQus();
                break;
        }
    }
    public filesDropped(files: any): void {
        this.files = files;
        this.showQuestions();
    }
    public onFileChanged(event: any) {
        this.selectedFiles = event.target.files;
        if (this.selectedFiles && Array.from(this.selectedFiles).length > 0) {
            Array.from(this.selectedFiles).forEach((file: any) => this.files.push({ file, url: URL.createObjectURL(file) }));
        }
        this.showQuestions();
    }
    private showQuestions() {
        this.showQues = (this.popuptype === 'policy' && this.files.length > 0);
    }
    public delete(file: any) {
        this.response = null;
        this.files = this.files.filter(x => x !== file);
        this.showQues = this.files.length !== 0;
        this.resetQus();
    }
    private resetQus() {
        this.typedQuestion = '';
        this.typedAnswer = '';
        this.commonquestions = JSON.parse(JSON.stringify(rawcommonquestions));
    }
    public upload(txt: string, data?: any): void {
        this.submmited = true;
        this.ImageWithText(txt, data);
    }
    private async ImageWithText(prompt: string, data?: any) {
        if (data && data !== 'typed') {
            data.animate = true;
        }
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
            if (data && data !== 'typed') {
                data.animate = false;
                data.answer = this.response;
            }
            if (data && data == 'typed') {
                this.typedAnswer = this.response;
            }
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