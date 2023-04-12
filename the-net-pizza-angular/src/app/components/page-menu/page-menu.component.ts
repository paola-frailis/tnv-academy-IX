import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.scss']
})
export class PageMenuComponent {

  constructor(public menuService: MenuService) {
    
  }

  onDeleteItem(id: number) {
    this.menuService.deletePiatto(id);
  }
}
