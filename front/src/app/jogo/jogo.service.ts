import { Jogo } from './jogo';
import { JogoFilter } from './jogo-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class JogoService {
  jogoList: Jogo[] = [];
  api = 'http://localhost:5125/api/Jogo';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Jogo> {
    const url = `${this.api}/${id}`;
    const params = { id : id };
    return this.http.get<Jogo>(url, {params, headers});
  }

  load(filter: JogoFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.jogoList = result;
      },
      error: err => {
        console.error('Erro ao carregar', err);
      }
    });
  }

  find(filter: JogoFilter): Observable<Jogo[]> {
    const params = {
      'nome': filter.nome,
    };

    return this.http.get<Jogo[]>(this.api, {params, headers});
  }

  save(entity: Jogo): Observable<Jogo> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Jogo>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Jogo>(url, entity, {headers, params});
    }
  }

  delete(entity: Jogo): Observable<Jogo> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Jogo>(url, {headers, params});
    }
    return EMPTY;
  }
}

