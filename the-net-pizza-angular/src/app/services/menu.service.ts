import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Piatto } from '../@models/piatto';
import { AddPiattoDTO as EditPiattoDTO } from '../@models/addPiattoDTO';
import { switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menu: Piatto[] = [];

  API_ROOT = 'http://localhost:1234/api';

  constructor(private httpClient: HttpClient) {
    this.getMenu();
  }

  getMenu() {
    this.httpClient.get<Piatto[]>(`${this.API_ROOT}/piatti/`).subscribe({
      next: (response) => {
        this.menu = response;
      },
    });
  }

  getPiatto(id: string) {
    return this.httpClient.get<Piatto>(`${this.API_ROOT}/piatti/${id}`);
  }

  deletePiatto(id: number) {
    this.httpClient.delete(`${this.API_ROOT}/piatti/${id}`).subscribe({
      next: () => (this.menu = this.menu.filter((x) => x.id !== id)),
    });
  }

  addPiatto(piatto: Partial<Piatto>) {
    return this.httpClient
      .post<EditPiattoDTO>(`${this.API_ROOT}/piatti/`, piatto)
      .pipe(tap((res) => (this.menu = [...this.menu, res.data])));
  }

  editPiatto(piatto: Partial<Piatto>) {
    return this.httpClient
      .patch<EditPiattoDTO>(`${this.API_ROOT}/piatti/${piatto.id}`, piatto)
      .pipe(
        switchMap(x => this.getPiatto(`${piatto.id}`)),
        tap((updatedPiatto) => {
          this.menu = this.menu.map((x) => (x.id === piatto.id ? updatedPiatto : x));
        })
      );
  }
}
