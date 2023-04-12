import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Piatto } from '../../@models/piatto';



@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() piatto: Partial<Piatto> = {};
  @Output() delete = new EventEmitter();

  onClick(id: number = -1) {
    this.delete.emit(id);
  }
}
