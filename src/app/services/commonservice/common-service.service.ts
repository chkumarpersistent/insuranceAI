// import { isPlatformBrowser } from '@angular/common';
import {  Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // public isBrowser: boolean = false;
  public renderer: Renderer2;
  public showMenu: boolean = false;
  private modalReference: any;
  constructor(
    // @Inject(PLATFORM_ID) platformId: Object,
    public rendererFactory: RendererFactory2,
    private modalService: NgbModal,
    config: NgbModalConfig,
  ) {
    // this.isBrowser = isPlatformBrowser(platformId);
    this.renderer = rendererFactory.createRenderer(null, null);
    config.backdrop = "static";
    config.keyboard = false;
  }


  public OpenPopup(content: any, selclass = "My_Popup", size = 'lg') {
    this.modalReference = this.modalService.open(content, { centered: true, windowClass: selclass, size });
  }
  public CloseModal() {
    this.modalReference ? this.modalReference.close() : "";
  }
  
  // public toggleOverflow() {
  //   if (this.isBrowser) {
  //     (this.showMenu) ? this.renderer.addClass(window.document.body, 'overflowx') : this.renderer.removeClass(window.document.body, 'overflowx');
  //     (this.showMenu) ? this.renderer.addClass(window.document.documentElement, 'overflowx') : this.renderer.removeClass(window.document.documentElement, 'overflowx');
  //   }
  // }


}
