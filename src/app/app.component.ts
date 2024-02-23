import { Component, HostListener } from '@angular/core';
import { CommonService } from './services/commonservice/common-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private CF: CommonService
  ) { }
  @HostListener('window:scroll', ['$event'])
  public scrollHandler(event: Event) {
    if (typeof window !== "undefined") { (window?.pageYOffset > 150) ? this.CF.renderer.addClass(window.document.getElementById('navbar'), 'sticky-dark') : this.CF.renderer.removeClass(window.document.getElementById('navbar'), 'sticky-dark') }
  }
}
