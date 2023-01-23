import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  
  private work: string[] = [];

  public get tareas(): string[] {
  return this.work;
  }
  public set tareas(value: string[]) {
  this.work = value;
  }
  constructor() {}
}
