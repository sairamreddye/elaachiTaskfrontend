import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormvaluesComponent } from './formvalues/formvalues.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'userformValues',
    pathMatch: 'full'
  },
  { 
        path:'userformValues',
        component:FormvaluesComponent
  },
  {
    path: '**',
    redirectTo: 'error',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormValuesRoutingModule { }
