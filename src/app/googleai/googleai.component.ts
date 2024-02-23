import { Component, OnInit } from '@angular/core';
import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = 'AIzaSyBEip1TZnfHNbMXlImJ1jr7ZV136BhcKII';
const genAI = new GoogleGenerativeAI(API_KEY);
@Component({
  selector: 'app-googleai',
  templateUrl: './googleai.component.html',
  styleUrls: ['./googleai.component.scss']
})
export class GoogleaiComponent implements OnInit {
  public prompt: string = '';
  public content: string | null = null;
  public submmited: boolean = false;
  public active = 1;
  //How to replay to client for this insurance policy
  public ngOnInit() {
  }
  public clearContent() {
    this.content = null;
  }
  public async textInput() {
    console.log('TEXT ONLY')
    if (this.prompt.length === 0) {
      alert('Hey! What you want to know, Type your message')
      return
    }
    this.submmited = true;
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    try {
      const result = await model.generateContent(this.prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
      this.content = text;
      this.prompt = '';
      this.submmited = false;
    } catch (error) {
      this.submmited = false;
      alert('Something went wrong, Try again')
    }
  }
  private selectedFiles: any = [];
  public uploadImages: any = [];
  onFileChanged(event: any) {
    this.selectedFiles = event.target.files;
    // let dataImages: any = [];
    if (this.selectedFiles && Array.from(this.selectedFiles).length > 0) {
      Array.from(this.selectedFiles).forEach((file: any) => {
        // const reader = new FileReader();
        // reader.onload = e => dataImages.push(reader.result);
        // reader.readAsDataURL(file);
        // console.log(dataImages)
        this.uploadImages.push(URL.createObjectURL(file))
      });
    }
  }
  public async ImageWithText() {
    if (this.prompt.length === 0) {
      alert('Hey! What you want to know about this Picture')
      return
    }
    if (Array.from(this.selectedFiles).length === 0) {
      alert('Upload Picture!')
      // this.textInput();
      return
    }
    console.log('TEXT - IMAGE')
    this.submmited = true;
    // For text-and-images input (multimodal), use the gemini-pro-vision model
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    // const prompt = "What's different between these pictures?";
    // const fileInputEl: any = document.querySelector("input[type=file]");
    // const imageParts: any = await Promise.all(
    //     [...fileInputEl.files].map(this.fileToGenerativePart)
    // );    
    const imageParts: any = await Promise.all(
      Array.from(this.selectedFiles).map(this.fileToGenerativePart)
    );
    try {
      const result = await model.generateContent([this.prompt, ...imageParts]);
      const response = await result.response;
      const text = response.text();
      console.log(text);
      this.content = text;
      this.submmited = false;
      this.prompt = '';
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
  public reset() {
    this.prompt = '';
    this.content = null;
    this.submmited = false;
    this.uploadImages = [];
  }
}
