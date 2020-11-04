import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; /*Este módulo contiene el ngModel*/

import { IncrementadorComponent } from './incrementador/incrementador.component';


@NgModule({
  declarations: [IncrementadorComponent],
  exports: [
    IncrementadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
