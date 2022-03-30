import { Component, OnInit } from '@angular/core';
import { JogoFilter } from '../jogo-filter';
import { JogoService } from '../jogo.service';
import { Jogo } from '../jogo';

@Component({
  selector: 'app-jogo',
  templateUrl: 'jogo-list.component.html'
})
export class JogoListComponent implements OnInit {

  filter = new JogoFilter();
  selectedJogo!: Jogo;
  feedback: any = {};

  get jogoList(): Jogo[] {
    return this.jogoService.jogoList;
  }

  constructor(private jogoService: JogoService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.jogoService.load(this.filter);
  }

  select(selected: Jogo): void {
    this.selectedJogo = selected;
  }

  delete(jogo: Jogo): void {
    if (confirm('Você tem certeza?')) {
      this.jogoService.delete(jogo).subscribe({
        next: () => {
          this.feedback = {type: 'success', message: 'Deletado com Sucesso!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Erro ao Deletar'};
        }
      });
    }
  }
}
