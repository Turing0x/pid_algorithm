import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';
import { IAlgorithm } from '../../models/ia_algorithm';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'algorithm-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
  
export class DetailsComponent implements OnInit {

  algorithm!: IAlgorithm;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      params => {
        const data = params.get('algorithm');
        if (data) {
          this.algorithm = JSON.parse(data)
        }
      }
    )
  }

}
