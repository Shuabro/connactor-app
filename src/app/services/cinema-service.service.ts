import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CinemaServiceService {

  constructor(private http: HttpClient) 
  {

  }

  getData()
   {

    let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=434577a472bbcc4c3d3154c77dd71ace&language=en-US';
    
    return this.http.get(url);
   }

   getQuery(query: string)
  {
    let url = "https://api.themoviedb.org/3/search/movie?api_key=434577a472bbcc4c3d3154c77dd71ace&language=en-US&query=" + query + "&page=1&include_adult=false&sort_by=release_date.desc";
    return this.http.get(url);
  }
}
