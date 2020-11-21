import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../types/api-response.type';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = 'https://omdbapi.com/?apikey=4ffa48bb&s=';

  constructor(private http: HttpClient) { }

  getResult(name): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.url + name);
  }
}
