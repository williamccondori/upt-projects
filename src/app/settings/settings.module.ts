import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GlobalsEditComponent } from './pages/globals/globals-edit/globals-edit.component';
import { GlobalsIndexComponent } from './pages/globals/globals-index/globals-index.component';
import { ParametersEditComponent } from './pages/parameters/parameters-edit/parameters-edit.component';
import { ParametersIndexComponent } from './pages/parameters/parameters-index/parameters-index.component';



@NgModule({
  declarations: [
    ParametersIndexComponent,
    ParametersEditComponent,
    GlobalsEditComponent,
    GlobalsIndexComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
