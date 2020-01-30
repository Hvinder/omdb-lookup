import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);

  constructor() { }

  ngOnInit() {
  }

  searchSong() {
    console.log(this.name.value);
  }

}
