import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormValuesRoutingModule } from './form-values-routing.module';
import { FormvaluesComponent } from './formvalues/formvalues.component';


@NgModule({
  declarations: [FormvaluesComponent],
  imports: [
    CommonModule,
    FormValuesRoutingModule
  ],
  exports:[
    FormvaluesComponent
  ]
})
export class FormValuesModule { }
