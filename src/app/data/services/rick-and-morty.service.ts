import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  getCharacters(params: any){
    return this.http.get(environment.baseUrl + environment.character, { params})
  }

  getCharacterById(id: string){
    return this.http.get(environment.baseUrl + environment.character + id)
  }

  getEpisodes(params: any){
    return this.http.get(environment.baseUrl + environment.episode, { params})
  }

  getByUrl(url: string){
    return this.http.get(url)
  }
}
