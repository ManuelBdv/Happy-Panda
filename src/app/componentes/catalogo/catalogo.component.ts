import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  Productos:any;
  showAddDialog: boolean = false;
  isLoading: boolean = true;

  name: string = '';

  constructor(
    private crudService:CrudService,
    public formulario:FormBuilder,
    private ruteador:Router
  ) { }

  ngOnInit(): void {
    this.crudService.obtenerProductos().subscribe(respuesta=>{
      this.Productos=respuesta;
    });
  }

  borrarRegistro(idproductos: any, iControl:any){
    console.log(idproductos);
    console.log(iControl);
    if(window.confirm("Desea borrar el producto?")){
      this.crudService.borrarProducto(idproductos).subscribe((respuesta) =>{
        this.Productos.splice(iControl,1);
      });
   }
  }



}
