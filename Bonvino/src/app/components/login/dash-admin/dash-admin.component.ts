import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.css']
})
export class DashAdminComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Código de inicialización si es necesario
  }

  irBodega() {
    this.router.navigate(["/bodegas"]);
  }

}
