import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DataListComponent } from './data-list/data-list.component';

export const routes: Routes = [
  {
    path: '',
    component: DataListComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  }
];
