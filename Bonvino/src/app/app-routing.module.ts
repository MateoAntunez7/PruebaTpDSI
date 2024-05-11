import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashAdminComponent } from './components/login/dash-admin/dash-admin.component';
import { MenuBodegasComponent } from './components/menu-bodegas/menu-bodegas.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a /login cuando la ruta está vacía
  { path: 'login', component: LoginComponent },
  { path: 'dashboard-admin', component: DashAdminComponent },
  { path: 'bodegas', component: MenuBodegasComponent },
  // Otras rutas aquí...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
