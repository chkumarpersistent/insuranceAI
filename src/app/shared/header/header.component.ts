import { Component, ElementRef, ViewChild } from '@angular/core';
import { LabelType, Options } from 'ngx-slider-v2';
import { CommonService } from 'src/app/services/commonservice/common-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('quotepopup', { static: false }) quotepopup: ElementRef | undefined;
  public age = 23;
  public isSmoker:string = 'no';
  public step1: boolean = true;
  public value: number = 5;
  public options: Options = {
    floor: 2,
    ceil: 50,
    translate: (value: number, label: LabelType): string => {
      return ''
      return "₹ " + value + " Lakhs";
    }
  };
  public healthissue = '1';
  public btnloading: boolean = false;
  public selectedTenure = 10;
  constructor(private CF: CommonService) { }
  public OpenQuote() {
    this.step1 = true;
    this.btnloading = false;
    this.CF.OpenPopup(this.quotepopup, 'quotePopup');
  }
  public tenure(number: number) {
    this.selectedTenure = number;
  }
  public applynow() {
    this.btnloading = true;
    setTimeout(() => {
      this.btnloading = false;
      this.CF.CloseModal();
      this.CF.SwalSuccess('Thank you for showing interest,<br/>Our executive will call you back.')
    }, 1500);
  }
}
