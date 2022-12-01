import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  elID:any;
  formGroup:FormGroup;

  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
    private ruteador:Router
  ) { 
    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);

    this.crudService.obtenerProducto(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta); 
        this.formGroup.setValue({
          idproductos:respuesta[0]['idproductos'],
          nombre:respuesta[0]['nombre'],
          unit:respuesta[0]['unit'],
          precio:respuesta[0]['precio']
        });
      }
    );
      this.formGroup=this.formulario.group(
        {
          idproductos:[''],
          nombre:[''],
          unit:[''],
          precio:['']
        }
      );
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formGroup.value);
    this.crudService.editarProducto(this.elID, this.formGroup.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/catalogo');
    });
  }

}
