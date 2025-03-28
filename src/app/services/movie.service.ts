import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  // Method to fetch movie data
  // Returns an Observable of type 'any' to handle the API response
  getMovieData(): Observable<any> {
    // Making a GET request to the OMDb API
    // Searching for movies with 'war' in the title
    // Note: API key is hardcoded (in a real app, this should be secured)
    return this.http.get('https://www.omdbapi.com/?apikey=2ee2ed84&s=%27war%27');
  }
}
