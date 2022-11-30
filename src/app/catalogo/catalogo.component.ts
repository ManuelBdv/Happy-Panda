import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  showAddDialog: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

addDialog(){
  this.showAddDialog = true;
}
}
