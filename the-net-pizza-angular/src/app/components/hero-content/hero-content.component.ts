import { Component } from '@angular/core';
import { Piatto } from 'src/app/@models/piatto';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: ['./hero-content.component.scss']
})
export class HeroContentComponent {

  constructor(public menuService: MenuService) {}

}
