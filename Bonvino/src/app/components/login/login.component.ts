import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Usa 'styleUrls' en lugar de 'styleUrl'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Código de inicialización si es necesario
  }

  inicio() {
    this.router.navigate(["/dashboard-admin"]);
  }
}
