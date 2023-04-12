import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Piatto } from '../../@models/piatto';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss']
})
export class MenuSectionComponent implements OnChanges {

  sectionName = '';

  @Input() menuItems: Piatto[] = [];
  @Output() deleteItem = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    this.sectionName = this.menuItems[0].category;
  }

  onDelete(id: number) {
    this.deleteItem.emit(id);
  }
}
