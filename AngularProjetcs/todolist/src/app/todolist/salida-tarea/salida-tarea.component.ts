import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-salida-tarea',
  templateUrl: './salida-tarea.component.html',
  styleUrls: ['./salida-tarea.component.css']
})
export class ListadoComponent implements OnInit {


  private addWork: string[] = [];

  private addPunto: string[] = [];

  constructor(private servicioTareas: TareasService) {}

  public get tareas(): string[] {
  return this.addWork;
  }
  public set tareas(value: string[]) {
  this.addWork = value;
  }

  
  public get puntos(): string[] {
    return this.addPunto;
  }
  public set puntos(value: string[]) {
    this.addPunto = value;
  }
  ngOnInit(): void {

  this.addWork = this.servicioTareas.tareas;
  this.addPunto = this.servicioTareas.tareas;
  
  }
  completada(tareaCompletada: string): void {
  this.addWork = this.addWork.filter((tarea) => tarea !== tareaCompletada);
  this.addPunto = this.addPunto.filter((punto) => punto !== tareaCompletada);
  }
  }