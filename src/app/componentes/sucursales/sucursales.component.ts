import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {
  Sucursales:any;
  
  
  constructor(
    private activeRoute:ActivatedRoute,
    public formulario:FormBuilder,
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    
    this.crudService.obtenerSucursales().subscribe(respuesta=>{
      this.Sucursales=respuesta;
    });
  }
  

}
