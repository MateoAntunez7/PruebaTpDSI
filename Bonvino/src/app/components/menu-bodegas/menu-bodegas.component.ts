import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bodegas',
  templateUrl: './menu-bodegas.component.html',
  styleUrl: './menu-bodegas.component.css'
})
export class MenuBodegasComponent {
  constructor(private router: Router) { } 
  ngOnInit(): void {
    // Código de inicialización si es necesario
  }

  irABodega() {
    this.router.navigate(["/bodega"]);
  }

}
