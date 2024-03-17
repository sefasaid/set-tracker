import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/list/list.page').then((m) => m.ListPage),
      },
      {
        path: 'list-detail/:id',
        loadComponent: () => import('./pages/list-detail/list-detail.page').then(m => m.ListDetailPage)
      },
      {
        path: 'exercise-detail/:id',
        loadComponent: () => import('./pages/exercise-detail/exercise-detail.page').then(m => m.ExerciseDetailPage)
      },
    ],
  },

];
