import { Component, OnInit } from '@angular/core';
import { Search } from '../types/api-response.type';
import { SearchService } from './search/search.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: []
})
export class ContainerComponent implements OnInit {
  query: string;
  searchResults: Search[] = [];
  searchHistory: string[] = [];

  constructor(private searchService: SearchService) { }

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
