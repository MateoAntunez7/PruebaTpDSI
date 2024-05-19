import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Asegúrate de que la ruta sea correcta
import { LoginComponent } from './components/login/login.component'; // Asegúrate de que la ruta sea correcta
import { DashAdminComponent } from './components/login/dash-admin/dash-admin.component';
import { MenuBodegasComponent } from './components/menu-bodegas/menu-bodegas.component';
import { HttpClientModule } from '@angular/common/http';
import { BodegaComponent } from './components/bodega/bodega.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashAdminComponent,
    MenuBodegasComponent,
    BodegaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
