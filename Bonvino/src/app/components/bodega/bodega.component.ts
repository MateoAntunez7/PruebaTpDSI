import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VinoService } from '../../services/vino.service';
import { Vino } from '../../models/vino.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})
export class BodegaComponent implements OnInit {
  vinos: Vino[] = [];
  vinosActualizacion: any;
  bodegaId: number | null = null;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private vinoService: VinoService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bodegaId = +params['id'];
      if (this.bodegaId) {
        this.getVinosPorBodegaId(this.bodegaId);
      }
    });
    this.http.get('../../../assets/json para consumir/vinos.JSON').subscribe((data: any) => {
      this.vinosActualizacion = data.vinos;
    });
    // Inicializa la lista de vinos vacía
    this.vinos = [];
  
  }

  getVinosPorBodegaId(idBodega: number): void {
    this.vinoService.getVinosPorBodegaId(idBodega)
      .subscribe(
        (vinos: Vino[]) => {
          this.vinos = vinos;
        },
        (error) => {
          console.error('Error fetching vinos', error);
        }
      );
  }

  actualizarVinos(): void {
  
    alert('Los vinos de la bodega se actualizaron exitosamente');
  }
  
}
