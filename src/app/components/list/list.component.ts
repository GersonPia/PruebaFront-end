import { Component, OnInit } from '@angular/core';
import { DataService } from './data..service';
import { NewsResponse } from 'src/app/models/city/city.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  public page: number =1;
  nombre: any;
  popular: any;

  constructor(private dataSvc: DataService) {this.dataSvc.getAllPeliculas()
    .subscribe( (resp) => {
    this.nombre = resp.results
    console.log("nombre", this.nombre)
    }) }

  ngOnInit() {
  }
}
