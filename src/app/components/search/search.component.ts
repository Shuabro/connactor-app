import { Component } from '@angular/core';
import { CinemaServiceService } from 'src/app/services/cinema-service.service';
import { SearchResultComponent } from '../search-result/search-result.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  sdDe : string[] = [];
  constructor(private cinema: CinemaServiceService){

    this.cinema.getData().subscribe(movies => {console.log(movies)})
  }

  searchMovies(e: any)
  {
    
   
    var query: string = e.target.value;

    this.cinema.getQuery(query).subscribe(movies => {console.log(movies)
    this.displayQuery(movies);})

    
    
  
  }
  displayQuery(movies:any){
   
    for(let i = 0; i < 10; i++)
    {
      this.sdDe[i] = movies.results[i].title;
      console.log(this.sdDe[i])
    }

    
  }
  
}
