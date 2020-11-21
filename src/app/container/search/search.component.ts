import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SearchService } from './search.service';
import { Search } from '../../types/api-response.type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.minLength(4)]);
  searchResults: Search[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  searchResult(searchQuery: string): void {
    this.searchService.getResult(searchQuery).subscribe((response) => {
      console.log(response);
      this.searchResults = response.Search;
    });
  }
}
