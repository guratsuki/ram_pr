import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Profile } from '../Interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient)

  baseApiUrl = 'https://icherniakov.ru/yt-course/'

  getTestAccounts(){
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`)
    //return this.http.get('https://rickandmortyapi.com/api/character/')
    //return this.http.get<Profile[]>('https://rickandmortyapi.com/api/character/')
    //return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
