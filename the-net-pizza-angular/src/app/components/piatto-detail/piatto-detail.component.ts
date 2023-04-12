import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Piatto } from 'src/app/@models/piatto';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-piatto-detail',
  templateUrl: './piatto-detail.component.html',
  styleUrls: ['./piatto-detail.component.scss']
})
export class PiattoDetailComponent implements OnInit {

  piattoId!: string;
  piatto: Partial<Piatto> = {};

  constructor(activatedRoute: ActivatedRoute, private menuService: MenuService) {
    this.piattoId = activatedRoute.snapshot.params['piattoId'];
  }

  ngOnInit(): void {
    this.menuService.getPiatto(this.piattoId).subscribe({
      next: (response) => this.piatto = response
    })
  }
}
