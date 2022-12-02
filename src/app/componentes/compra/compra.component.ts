import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  formGroup:FormGroup;
  Productos:any;
  unidad:any;
  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
  ) { 

    this.formGroup=this.formulario.group(
      {
        unit:['']
      }
    );
  }
  

  ngOnInit(): void {
    this.actualizarTabla();
  }

  
  enviarDatos(id:any):any{
    let unidadTotal = 0;
    let formulariogroup = this.formGroup;
    this.crudService.obtenerProducto(id).subscribe(
      respuesta=>{
        unidadTotal = parseInt(this.formGroup.value.unit) + parseInt(respuesta[0]['unit']);
        formulariogroup.setValue({
          unit:unidadTotal+""
        });
        
        this.crudService.comprarProducto(id,formulariogroup.value).subscribe(()=>{
          this.actualizarTabla();
          this.formGroup=this.formulario.group(
            {
              unit:['']
            }
          );
        });

      }
    );
  }
  
  actualizarTabla():any{
    this.crudService.obtenerProductos().subscribe(respuesta=>{
      this.Productos=respuesta;
    });
  }
}
