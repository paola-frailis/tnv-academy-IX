import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Piatto } from '../@models/piatto';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menu: Piatto[] = [];
  piattiAntipasti: Piatto[] = [];
  piattiPrimi: Piatto[] = [];
  piattiDolci: Piatto[] = [];

  constructor(private httpClient: HttpClient) {
    this.getMenu();
  }

  getMenu() {
    this.httpClient
      .get<Piatto[]>(
        'https://my-json-server.typicode.com/michelefenu/tnv-academy-IX/piatti/'
      )
      .subscribe({
        next: (response) => {
          this.menu = response;
          this.piattiAntipasti = this.menu.filter(
            (x) => x.category === 'antipasti'
          );
          this.piattiPrimi = this.menu.filter((x) => x.category === 'primi');
          this.piattiDolci = this.menu.filter((x) => x.category === 'dolci');
        },
      });
  }

  getPiatto(id: string) {
    return this.httpClient.get<Piatto>(
      `https://my-json-server.typicode.com/michelefenu/tnv-academy-IX/piatti/${id}`
    );
  }
}
