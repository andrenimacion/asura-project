import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public router: Router) { }

  storage(routeA, routeB) {
    if (localStorage.getItem('user') == null || localStorage.getItem('user') === '') {
      console.log('Es nulo');
      this.router.navigate([`\${routeA}`]);
    } else {
      console.log('No es nulo');
      this.router.navigate([`\${routeB}`]);
    }
  }

}
