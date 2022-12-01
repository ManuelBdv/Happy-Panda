import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { VentaComponent } from './componentes/venta/venta.component';
import { CompraComponent } from './componentes/compra/compra.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';

import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import{ ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VentaComponent,
    CompraComponent,
    CatalogoComponent,
    AgregarProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    RouterModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
