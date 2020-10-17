import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../Models/Usuario';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiURL = this.baseUrl + 'api/Usuario';
  public env = environment;

  constructor(
    private http: HttpClient, @Inject('BASE_URL') private baseUrl: string,
    private router: Router
  ) { }


  login(userInfo: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(this.apiURL + '/Login', userInfo);
  }

  infoAllUsers() {
    return this.http.get<any[]>(this.apiURL + '/getAllInfo');
  }

  getData(id: string): Observable<IUsuario> {
    return this.http.get<IUsuario>(this.apiURL + '/GetUserById/' + id);
  }

  updateUserId(userInfo: IUsuario): Observable<IUsuario> {
    return this.http.put<IUsuario>(this.apiURL + '/update/' + userInfo.Id, userInfo);
  }

  Save(user: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(this.apiURL + '/Save', user);
  }

  logout() {
    localStorage.removeItem('tokenTienda');
    localStorage.removeItem('tokenTiendaAdmin');
    localStorage.removeItem('tokenTiendaId');
    // localStorage.removeItem("tokenExpiration");
  }

  estaLogueado(): boolean {
    var exp = this.obtenerExistenciaToken();
    if (!exp) {
      return false;
    }
    else {
      return true;
    }
  }

  obtenerExistenciaToken(): string {
    return localStorage.getItem('tokenTienda');
  }

  soyAdmin(): boolean {
    var exp = this.obtenerTokenAdmn();
    if (!exp) {
      return false;
    }
    else {
      if (exp == 'true') {
        return true;
      }
      else {
        return false;
      }
    }
  }

  obtenerTokenAdmn(): string {
    return localStorage.getItem('tokenTiendaAdmin');
  }
}
