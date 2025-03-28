import { Component, OnInit} from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  // Selector used to place this component in other templates
  selector: 'app-home',
  // Path to the component's template file
  templateUrl: 'home.page.html',
  // Path to the component's styles
  styleUrls: ['home.page.scss'],
  // Importing standalone Ionic components and CommonModule
  imports: [
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle,
    CommonModule, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent
  ],
})
// HomePage class implementing OnInit lifecycle hook
export class HomePage implements OnInit {
  // Array to store movies, typed as any[] for flexibility
  myMovies: any[] = [];

  // Constructor with dependency injection of MovieService
  constructor(private ms: MovieService) {}

  // OnInit lifecycle hook method
  ngOnInit(): void {
    // Calling movie service method to fetch movie data
    this.ms.getMovieData().subscribe(
      // Callback function to handle the received data
      (data) => {
        // Assigning the Search array from the response to myMovies
        this.myMovies = data.Search;
      }
    );
  }
}
