import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleaiComponent } from './googleai.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SanitizerUrlPipe } from './sanitizerUrl.pipe';

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
    RouterModule.forChild(routes)
  ]
})
export class GoogleaiModule { }
