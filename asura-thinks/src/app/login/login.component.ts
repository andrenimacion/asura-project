import { Component, OnInit } from '@angular/core';
import { GetDataThinksService } from '../services/get-data-thinks.service';
import Swal from 'sweetalert2';
import { User } from '../models/Login';
import { Router } from '@angular/router';
import { EstilosService } from '../services/estilos.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  public _Nombre: string;
  // tslint:disable-next-line: variable-name
  public _Pass: string;
  // tslint:disable-next-line: variable-name
  public _height: string ;

  // public Iuser: User[] = [];

  // tslint:disable-next-line: max-line-length
  constructor(public storage: StorageService,
              private login: GetDataThinksService,
              public router: Router,
              public height: EstilosService ) { }

  ngOnInit() {
    this._Nombre = localStorage.getItem('user');

    this.height.inHeight(this._height);
    if (localStorage.getItem('user') == null || localStorage.getItem('user') === '') {
     // console.log('Es nulo');
      this.router.navigate(['\Login']);
    } else {
     // console.log('No es nulo');
      this.router.navigate(['\ThinkBoard']);
    }
  }

Logearse() {
    let Iuser: any = {
      nombre: this._Nombre,
      password: this._Pass
    }

    console.log(Iuser);

    this.login.login(Iuser).subscribe(x => {
      Iuser = x;
      // localStorage.setItem('user', arr.nombre);
      // localStorage.setItem('tipo', arr.actividad);
      this.router.navigate(['\ThinkBoard']);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Te has logueado correctamente',
        showConfirmButton: false,
        timer: 1800
      });
    }, err => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Tus datos no son correctos',
        footer: `${err}`,
        showConfirmButton: false,
        timer: 1800
      });
    });
  }

}
