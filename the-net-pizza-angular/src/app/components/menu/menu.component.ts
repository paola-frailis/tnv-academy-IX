import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Piatto } from '../../@models/piatto';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnChanges {
  
  @Input() menu: Piatto[] = [];
  @Output() deleteItem = new EventEmitter();
  
  menuSections: Piatto[][] = [];

  searchString = '';


  constructor() {

  }

  ngOnChanges(): void {
    this.filterMenu();
  }

  onSearch(event: string) {
    this.searchString = event;
    this.filterMenu();
  }

  onDeleteItem(id: number) {
    this.deleteItem.emit(id);
  }

  private filterMenu() {
    const filteredMenu = [...this.menu.filter(x => x.title.toLowerCase().includes(this.searchString.toLowerCase()))];
    const categories = [...new Set(filteredMenu.map(x => x.category))];
    
    this.menuSections = [];

    for(let category of categories) {
      this.menuSections.push(filteredMenu.filter(
        (x) => x.category === category
      ))
    }
  }
}
