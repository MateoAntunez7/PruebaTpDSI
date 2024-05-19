import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  private url = 'assets/bodegas.json';

  constructor(private http: HttpClient) { }

  obtenerBodegas(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}