import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { IAlgorithm } from '../../models/ia_algorithm';
import { InfoAlgorithm } from '../../data';
import { FrecuentlyComponent } from '../frecuently/frecuently.component';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [
    CommonModule,
    FrecuentlyComponent
  ],
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  algorithm_list!: IAlgorithm[];
  data: IAlgorithm[] = []

  constructor() {
    this.algorithm_list = InfoAlgorithm
    this.data = InfoAlgorithm
  }

  searchAlgorithm() {
    const name = (document.getElementById('search') as HTMLInputElement).value
    if (name) {
      this.data = this.algorithm_list.filter((algorithm: IAlgorithm) => {
        return algorithm.name.toLowerCase().includes(name.toLowerCase())
      })
    } else {
      this.data = this.algorithm_list
    }
  }

  ngOnInit(): void { }

}
