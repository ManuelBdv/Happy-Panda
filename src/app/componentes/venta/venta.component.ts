import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  Productos:any;
  selectedItem: any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.obtenerProductos().subscribe(respuesta=>{
      console.log(respuesta);
      this.Productos=respuesta;
    });
  }

}
