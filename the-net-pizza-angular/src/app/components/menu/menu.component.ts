import { Component, OnInit } from '@angular/core';
import { Piatto } from '../../@models/piatto';
import { HttpClient } from '@angular/common/http';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  constructor(public menuService: MenuService) {}

}
