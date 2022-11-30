import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VentaComponent } from './venta/venta.component';
import { CompraComponent } from './compra/compra.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import{ ButtonModule } from 'primeng/button';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './layout/main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VentaComponent,
    CompraComponent,
    CatalogoComponent,
    LayoutComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
