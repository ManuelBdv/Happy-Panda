import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { CompraComponent } from './componentes/compra/compra.component';
import { HomeComponent } from './componentes/home/home.component';
import { VentaComponent } from './componentes/venta/venta.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'venta', component: VentaComponent},
  {path: 'compra', component: CompraComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'producto', component: AgregarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
