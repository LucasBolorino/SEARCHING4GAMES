import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JogoListComponent } from './jogo-list/jogo-list.component';
import { JogoEditComponent } from './jogo-edit/jogo-edit.component';
import { JogoService } from './jogo.service';
import { JOGO_ROUTES } from './jogo.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(JOGO_ROUTES)
  ],
  declarations: [
    JogoListComponent,
    JogoEditComponent
  ],
  providers: [JogoService],
  exports: []
})
export class JogoModule { }
