import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CompraComponent } from './compra/compra.component';
import { HomeComponent } from './home/home.component';
import { VentaComponent } from './venta/venta.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'venta', component: VentaComponent},
  {path: 'compra', component: CompraComponent},
  {path: 'catalogo', component: CatalogoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
