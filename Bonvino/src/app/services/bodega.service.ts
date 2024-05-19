import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  private url = '../../assets/json para consumir/vinos.JSON';

  constructor(private http: HttpClient) { }

  getBodegas(): Observable<any> { // Corrección del nombre del método
    return this.http.get<any>(this.url);
  }
}
