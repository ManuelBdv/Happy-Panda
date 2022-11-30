import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  showAddDialog: boolean = false;
  isLoading: boolean = true;



  name: string = '';

  constructor() { }

  ngOnInit(): void {
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
