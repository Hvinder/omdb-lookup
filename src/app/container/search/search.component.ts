import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() searchQuery = new EventEmitter<string>();
  name = new FormControl('', [Validators.required, Validators.minLength(4)]);

  constructor() {}

  ngOnInit() {}

  submit(): void {
    this.searchQuery.emit(this.name.value);
  }
}
