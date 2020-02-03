import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SearchService } from './search.service';
import { ApiResponse, ApiData } from '../../model/api-response';
import { forbiddenNameValidator } from 'src/app/shared/forbidden-name.directive';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    forbiddenNameValidator(/furious/i)
  ]);

  data: any = [];

  dataFromApi: any = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  searchSong() {
    console.log(this.name.value);
    this.dataFromApi = [];

    this.searchService.getTrack(this.name.value).subscribe((response) => {
      console.log(response);
      this.data = response.Search;
      for (const d of this.data) {
        // const apiResponse: ApiResponse = { title: '', year: '', type: '', poster: '' };
        const apiResponse = new ApiData();
        apiResponse.title = d.Title;
        apiResponse.year = d.Year;
        apiResponse.type = d.Type;
        apiResponse.poster = d.Poster;
        this.dataFromApi.push(apiResponse);
      }
    });
  }

}
