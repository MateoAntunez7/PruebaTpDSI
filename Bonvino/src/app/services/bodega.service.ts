// services/bodega.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bodega } from '../models/Bodega';
import { BodegaDTO } from '../models/bodega-dto.model';
import { BodegaFullDTO } from '../models/bodega-full-dto.model';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {
  private apiUrl = 'http://localhost:8080/bodegas';

  constructor(private http: HttpClient) { }

  getBodegas(): Observable<Bodega[]> {
    return this.http.get<Bodega[]>(`${this.apiUrl}/actualizables`);
  }

  getBodegasDTO(): Observable<BodegaDTO[]> {
    return this.http.get<BodegaDTO[]>(`${this.apiUrl}/actualizablesDTO`);
  }

  getBodegasFullDTO(): Observable<BodegaFullDTO[]> {
    return this.http.get<BodegaFullDTO[]>(`${this.apiUrl}/actualizablesDTO2`);
  }

  actualizarBodega(id: number, bodega: Bodega): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/${id}`, bodega);
  }

  actualizarPeriodoYEstado(id: number): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/actualizar-periodo-estado/${id}`, {});
  }
}
