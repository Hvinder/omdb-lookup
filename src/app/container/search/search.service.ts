import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../model/api-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // url = 'https://reqres.in/api/users?page=2';
  url = 'https://omdbapi.com/?apikey=4ffa48bb&s=';
  url2 = 'https://api.spotify.com/v1/search?q='; // For spotify

  constructor(private http: HttpClient) { }

  getTrack(name): Observable<ApiResponse> {
    // return this.http.get<ApiResponse>(this.url2+name+'&type=track'); // For spotify
    return this.http.get<ApiResponse>(this.url + name);
  }
}
