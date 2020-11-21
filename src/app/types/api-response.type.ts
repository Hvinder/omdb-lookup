export interface ApiResponse {
  Search: Search[];
}

export interface Search {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
