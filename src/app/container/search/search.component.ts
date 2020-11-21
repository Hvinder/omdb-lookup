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
  searchHistory: string[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchResults = JSON.parse(localStorage.getItem('searchResults'));
  }

  fetchResult(searchQuery: string): void {
    this.setHistory(searchQuery);
    this.searchService.getResult(searchQuery).subscribe((response) => {
      console.log(response);
      this.searchResults = response.Search;
      localStorage.setItem('searchResults', JSON.stringify(this.searchResults));
    });
  }

  setHistory(history: string): void {
    this.searchHistory.push(history);
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
  }
}
