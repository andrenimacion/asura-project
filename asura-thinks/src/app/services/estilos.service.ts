import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstilosService {


  constructor() { }

  // control de altura para etiquetas
  inHeight(a) {
    const p = a;
    let b = a + 'px';
    return b;
  }
}
