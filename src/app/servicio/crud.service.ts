import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { producto } from './producto';
import { sucursales } from './sucursales';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string='http://localhost/index.php/';
  constructor(private clienteHttp:HttpClient) { }

  agregarProducto(datosProducto:producto):Observable<any> {
    return this.clienteHttp.post(this.API+"?insertar=1",datosProducto);
  }

  obtenerProductos(){
    return this.clienteHttp.get(this.API);
  }

  borrarProducto(id:any):Observable<any> {
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }

  obtenerProducto(id:any):Observable<any> {
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }
  obtenerSucursales():Observable<any> {
    return this.clienteHttp.get(this.API+"?consultarS=");
  }

  editarProducto(id:any,datosProducto:any):Observable<any> {
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosProducto);
  }
  comprarProducto(id:any,datosProducto:any):Observable<any> {
    return this.clienteHttp.post(this.API+"?comprar="+id,datosProducto);
  }
  
}
