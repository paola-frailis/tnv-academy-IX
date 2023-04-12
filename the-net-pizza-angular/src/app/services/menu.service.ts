import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Piatto } from '../@models/piatto';

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
    this.httpClient
      .get<Piatto[]>(
        `${this.API_ROOT}/piatti/`
      )
      .subscribe({
        next: (response) => {
          this.menu = response;
        },
      });
  }

  getPiatto(id: string) {
    return this.httpClient.get<Piatto>(
      `${this.API_ROOT}/piatti/${id}`
    );
  }

  deletePiatto(id: number) {
    this.httpClient.delete(
      `${this.API_ROOT}/piatti/${id}`
    ).subscribe({
      next: () => this.menu = this.menu.filter(x => x.id !== id)
    });
  }
}
