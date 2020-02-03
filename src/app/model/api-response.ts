export interface ApiResponse {
  [x: string]: any;
    title: string;
    year: string;
    type: string;
    poster: string;
}

export class ApiData implements ApiResponse {
  [x: string]: any;  title: string;
  year: string;
  type: string;
  poster: string;
}
