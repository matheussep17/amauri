import { FieldComponent } from './field/field.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FieldComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FieldComponent
  ]
})
export class CoreModule { }
