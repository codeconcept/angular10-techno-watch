import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TechnoService {
  technos = [];

  constructor() {}

  createTechno(techno) {
    this.technos = [techno, ...this.technos];
    console.log(this.technos);
  }

  getTechnos() {
    return this.technos;
  }
}
