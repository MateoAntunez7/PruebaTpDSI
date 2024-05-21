import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vino } from '../models/vino.model'; // Importa el modelo de vino

@Injectable({
  providedIn: 'root'
})
export class VinoService {

  private apiUrl = 'http://localhost:8080/vinos'; // Ajusta la URL base según tu configuración de backend

  constructor(private http: HttpClient) { }

  // Método para obtener los vinos de una bodega por su ID
  getVinosPorBodegaId(idBodega: number): Observable<Vino[]> {
    return this.http.get<Vino[]>(`${this.apiUrl}/bodega/dto/${idBodega}`);
  }
}
