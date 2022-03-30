import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JogoService } from '../jogo.service';
import { Jogo } from '../jogo';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-jogo-edit',
  templateUrl: './jogo-edit.component.html'
})
export class JogoEditComponent implements OnInit {

  id!: string;
  jogo!: Jogo;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jogoService: JogoService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new Jogo()); }
          return this.jogoService.findById(id);
        })
      )
      .subscribe({
        next: jogo => {
          this.jogo = jogo;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Erro ao carregar'};
        }
      });
  }

  save() {
    this.jogoService.save(this.jogo).subscribe({
      next: jogo => {
        this.jogo = jogo;
        this.feedback = {type: 'success', message: 'Salvado com Sucesso!'};
        setTimeout(async () => {
          await this.router.navigate(['/jogos']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Erro ao Salvar'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/jogos']);
  }
}
