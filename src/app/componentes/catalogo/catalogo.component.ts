import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

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
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.obtenerProductos().subscribe(respuesta=>{
      console.log(respuesta);
      this.Productos=respuesta;
    });
  }

addDialog(){
  this.showAddDialog = true;
  this.name = "";
}

saveProductBtn(){
  this.isLoading = true;
  this.showAddDialog = false;
}
}
