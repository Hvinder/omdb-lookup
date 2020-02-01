import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SearchService } from './search.service';
import { ApiResponse } from '../../model/api-response';
import { DataService } from '../data.service';

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

  data: any = [];

  dataFromApi: any = [];

  constructor(private searchService: SearchService, private dataService: DataService) { }

  ngOnInit() {
  }

  searchSong() {
    console.log(this.name.value);
    this.dataFromApi = [];
    
    this.searchService.getTrack(this.name.value).subscribe((response)=> {
      console.log(response);
      this.data = response.Search;
      for(var i=0;i<this.data.length;i++){
        // let apiResponse=new ApiResponse();
        var apiResponse: ApiResponse = {title: '', year: '', type: '', poster: ''};
        apiResponse.title=this.data[i].Title;
        apiResponse.year=this.data[i].Year;
        apiResponse.type=this.data[i].Type;
        apiResponse.poster=this.data[i].Poster;
        this.dataFromApi.push(apiResponse);
      }
      this.dataService.insertData(this.dataFromApi);
    })
  }

}
