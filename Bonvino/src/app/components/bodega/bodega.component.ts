import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VinoService } from '../../services/vino.service';
import { Vino } from '../../models/vino.model';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})
export class BodegaComponent implements OnInit {
  vinos: Vino[] = [];
  bodegaId: number | null = null;

  constructor(
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
}
