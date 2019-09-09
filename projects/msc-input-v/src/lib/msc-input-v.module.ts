import { NgModule } from '@angular/core';
import { MscInputVComponent } from './msc-input-v.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [MscInputVComponent],
  imports: [
    BrowserModule
  ],
  exports: [MscInputVComponent]
})
export class MscInputVModule { }
