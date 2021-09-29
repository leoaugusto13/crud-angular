import { Curso } from './../models/curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [
    { _id: "1", nome: 'Angular', categoria: 'Front-End'},
    {_id: "2", nome: 'Java', categoria: 'Back-End'}
  ];

  displayedColumns = ['nome','categoria'];

  constructor() {

   }

  ngOnInit(): void {
  }

}
