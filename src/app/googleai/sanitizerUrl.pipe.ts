import { Pipe, type PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeUrl',
  standalone: false,
})
export class SanitizerUrlPipe implements PipeTransform {

  constructor(
    private sanitize: DomSanitizer
  ) { }

  transform(file: any): SafeUrl {  
    return this.sanitize.bypassSecurityTrustUrl(file);
  }

}
