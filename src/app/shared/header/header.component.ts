import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/services/commonservice/common-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('quotepopup', { static: false }) quotepopup: ElementRef | undefined;
  constructor(private CF: CommonService) { }

  public OpenQuote() {
    this.CF.OpenPopup(this.quotepopup, 'quotePopup');
  }
}
