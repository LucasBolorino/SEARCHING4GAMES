import { Routes } from '@angular/router';
import { JogoListComponent } from './jogo-list/jogo-list.component';
import { JogoEditComponent } from './jogo-edit/jogo-edit.component';

export const JOGO_ROUTES: Routes = [
  {
    path: 'jogos',
    component: JogoListComponent
  },
  {
    path: 'jogos/:id',
    component: JogoEditComponent
  }
];
