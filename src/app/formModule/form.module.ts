import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form/form.component';
import { FormValuesModule } from '../formValuesmodule/form-values.module';
import { HeaderComponent } from './header/header.component';
import { ListsComponent } from './lists/lists.component';
import { FormmoduleComponent } from './formmodule.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    FormComponent,
    HeaderComponent,
    ListsComponent,
    FormmoduleComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormValuesModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class FormModule { }
