import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../../services/bodega.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})
export class BodegaComponent implements OnInit {

  bodegas: any[] = []; // Inicialización como arreglo vacío
  bodegaActual: any[] = [
    {
      "id": 1,
      "nombre": "Bodega A",
      "actualizaciones": [
        {
          "fecha": "2024-05-01",
          "vinos": [
            {"nombre": "Vino A1", "tipo": "Tinto", "añada": 2020, "precioARS": 500, "notaDeCataBodega": "Vino A1 es un vino tinto intenso y afrutado."}
          ]
        }
      ]
    }
  ];

  mensajeExito: boolean = false; // Variable para controlar la visibilidad del mensaje

  constructor(private bodegaService: BodegaService, private router: Router ) { }

  ngOnInit(): void {
    this.getBodegas();
  }

  getBodegas(): void {
    this.bodegaService.getBodegas()
      .subscribe(bodegas => this.bodegas = bodegas);
  }

  actualizarBodegaActual(): void {
    this.bodegaActual = this.bodegas;
    this.mostrarMensajeExito();
    
  }

  mostrarMensajeExito(): void {
    this.mensajeExito = true;
    setTimeout(() => {
      this.mensajeExito = false;
    }, 3000); // Oculta el mensaje después de 3 segundos
  }
}
