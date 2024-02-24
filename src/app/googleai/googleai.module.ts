import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleaiComponent } from './googleai.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SanitizerUrlPipe } from './sanitizerUrl.pipe';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', component: GoogleaiComponent },
];

@NgModule({
  declarations: [
    GoogleaiComponent,
    SanitizerUrlPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
   

    NgbNavModule
  ]
})
export class GoogleaiModule { }
