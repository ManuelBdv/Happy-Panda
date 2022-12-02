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
  elID:any;
  formGroup:FormGroup;
  Productos:any;
  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
  ) { 
    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);

    this.formGroup=this.formulario.group(
      {
        unit:['']
      }
    );
  }

  ngOnInit(): void {
    this.crudService.obtenerProductos().subscribe(respuesta=>{
      console.log(respuesta);
      this.Productos=respuesta;
    });
  }
  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formGroup.value);
    this.crudService.comprarProducto(this.elID, this.formGroup.value).subscribe(()=>{
    });
  }

}
