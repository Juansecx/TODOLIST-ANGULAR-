import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-entrada-tarea',
  templateUrl: './entrada-tarea.component.html',
  styleUrls: ['./entrada-tarea.component.css'],
})
export class EntradaTareaComponent implements OnInit {

  private addWork: string = '';

  private addPunto: string = '';

  constructor(private servicioTareas: TareasService) {}

  ngOnInit(): void {}

  addTarea(): void {
    
    if (this.addWork !== '') {

      this.servicioTareas.tareas.push(this.addWork);
      this.addWork = '';
    }
  }

  addPunt(): void {
    
    if (this.addPunto !== '') {

      this.servicioTareas.tareas.push(this.addPunto);
      this.addPunto = '';
    }
  }

  set work(work: string) {
    this.addWork = work;
  }

  get work(): string {
    return this.addWork;
  }

  set puntos(punto: string) {
    this.addPunto = punto;
  }

  get puntos(): string {
    return this.addPunto;
  }





}
