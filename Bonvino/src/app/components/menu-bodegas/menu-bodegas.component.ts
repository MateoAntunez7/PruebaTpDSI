import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BodegaService } from '../../services/bodega.service';  // Ajusta la ruta según tu estructura de proyecto
import { BodegaDTO } from './../../models/bodega-dto.model';  // Ajusta la ruta según tu estructura de proyecto

@Component({
  selector: 'app-menu-bodegas',
  templateUrl: './menu-bodegas.component.html',
  styleUrls: ['./menu-bodegas.component.css']
})
export class MenuBodegasComponent implements OnInit {
  bodegas: BodegaDTO[] = [];

  constructor(private router: Router, private bodegaService: BodegaService) {}

  ngOnInit(): void {
    this.bodegaService.getBodegas().subscribe(
      (data: BodegaDTO[]) => {
        this.bodegas = data;
      },
      (error) => {
        console.error('Error fetching bodegas', error);
      }
    );
  }

  irABodega(bodegaId: number) {
    this.router.navigate(['/bodega', bodegaId]);
  }
  
}
