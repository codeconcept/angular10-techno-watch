import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TechnoService {
  technos = [];

  constructor() {}

  createTechno(techno) {
    const newTechno = { id: Date.now(), ...techno };
    this.technos = [newTechno, ...this.technos];
    console.log(this.technos);
  }

  getTechnos() {
    return this.technos;
  }
}
