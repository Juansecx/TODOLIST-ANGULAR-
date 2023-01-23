import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradaTareaComponent } from './entrada-tarea/entrada-tarea.component';

/*import { SalidaTareaComponent } from './salida-tarea/salida-tarea.component';

*/

@NgModule({
  declarations: [
    EntradaTareaComponent,
    SalidaTareaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EntradaTareaComponent,
    SalidaTareaComponent
  ]
})
export class TodolistModule { }
