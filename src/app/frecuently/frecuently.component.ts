import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IAlgorithm } from '../../models/ia_algorithm';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'frecuently-algorithm',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './frecuently.component.html',
  styleUrls: ['./frecuently.component.css']
})
  
export class FrecuentlyComponent {
  @Input() algorithm_list!: IAlgorithm[];

  objectToString(data: IAlgorithm): string {
    return JSON.stringify(data)
  }
}
