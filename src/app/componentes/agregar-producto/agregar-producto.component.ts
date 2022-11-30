import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  formGroup:FormGroup;

  constructor(
    public formulario:FormBuilder,
  ) {
    this.formGroup = this.formulario.group({
      id:[''],
      nombre:[''],
      precioUni:[''],
      stock:['']
    });
   }

  ngOnInit(): void {
  }

  enviarDatos(){
    console.log("Presionado");
    console.log(this.formGroup.value);
  }

  saveProductBtn(){
   
  }

}
