import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';

@Component({
  selector: 'app-menu-filter',
  templateUrl: './menu-filter.component.html',
  styleUrls: ['./menu-filter.component.scss']
})
export class MenuFilterComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  searchString = new FormControl('');

  ngOnInit(): void {
    this.searchString.valueChanges.pipe(
      debounceTime(500),
      tap(x => console.log(x))
    ).subscribe({
      next: (text) => {
        text = text ? text : '';
        this.search.emit(text)
      }
    })
  }
}
