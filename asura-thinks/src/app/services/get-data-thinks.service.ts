import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class GetDataThinksService {

  private urlLocal = 'http://asuraproject.somee.com/';

  constructor(private http: HttpClient) { }

  // getConfig() {
  //   return this.http.get(this.urlLocal + '/api/Asura/Login');
  // }

  login(content: any): Observable<any[]> {
    return this.http.post<any[]>(this.urlLocal + 'api/Asura/Login', content);
  }

  getUser() {
    return this.http.get(this.urlLocal + 'api/Asura/GetUsuarios');
  }

}
