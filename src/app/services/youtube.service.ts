import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  URL = 'https://simple-youtube-search.p.rapidapi.com/search';
  API_KEY = 'YOUR_APIKEY'

  constructor(private _http: HttpClient) { }

  public getYoutubeResult(busqueda: string, tipoBusqueda: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': this.API_KEY,
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
      }),
      params: {
        query: busqueda,
        type: tipoBusqueda,
        safesearch: 'false'
      }
    }

    return this._http.get(this.URL, httpOptions);
  }
}
