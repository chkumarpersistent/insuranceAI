import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public isBrowser: boolean = false;
  public renderer: Renderer2;
  public showMenu: boolean = false;
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    public rendererFactory: RendererFactory2,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  public toggleOverflow() {
    if (this.isBrowser) {
      (this.showMenu) ? this.renderer.addClass(window.document.body, 'overflowx') : this.renderer.removeClass(window.document.body, 'overflowx');
      (this.showMenu) ? this.renderer.addClass(window.document.documentElement, 'overflowx') : this.renderer.removeClass(window.document.documentElement, 'overflowx');
    }
  }
}
