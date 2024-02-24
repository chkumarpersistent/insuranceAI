// import { isPlatformBrowser } from '@angular/common';
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import Swal from "sweetalert2";
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
  // SWEET ALERT
  public SwalSuccess(msg: string, heading = "Success!") {
    Swal.fire({
      title: heading,
      // text: msg,
      html: msg,
      icon: "success",
      confirmButtonColor: "#7e3f97",
    });
  }
  public SwalWarning(msg: any, heading = "Warning") {
    Swal.fire(heading, msg, "warning");
  }
  public SwalError(msg: any, heading = "Error") {
    Swal.fire(heading, msg, "error");
  }
  public Swalhtml(icon: any, Heading: any, msg: any) {
    Swal.fire({
      title: Heading,
      html: msg,
      icon,
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
    });
  }
  public SwalClose() {
    Swal.close()
  }

  public SwalSuccessAutoclose(msg: string, timer = 2000, heading = "Success!") {
    Swal.fire({
      title: heading,
      text: msg,
      icon: "success",
      confirmButtonColor: "#7e3f97",
      timer,
      timerProgressBar: true,
    });
  }

}
