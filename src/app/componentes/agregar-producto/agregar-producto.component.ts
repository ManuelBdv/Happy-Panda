import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  formGroup:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
  ) {
    this.formGroup = this.formulario.group({
      idproductos:[''],
      nombre:[''],
      unit:[''],
      precio:['']
    });
   }

  ngOnInit(): void {
  }

  enviarDatos(){
    console.log("Presionado");
    console.log(this.formGroup.value);

    this.crudService.agregarProducto(this.formGroup.value).subscribe();
    this.ruteador.navigateByUrl('/catalogo');

  }

  saveProductBtn(){
   
  }

}
