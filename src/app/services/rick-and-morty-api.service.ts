import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episode } from '../interfaces/episode';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyApiService {
  constructor(private http: HttpClient) {}
  urlE = 'https://rickandmortyapi.com/api/episode';
  urlC = 'https://rickandmortyapi.com/api/character';

  getEpisodes(n: number, m: number) {
    let range = '';
    for (let i = n; i <= m; i++) {
      range += `${i},`;
    }
    return this.http.get<Episode[]>(`${this.urlE}/${range}`);
  }

  getCharacter(id: number) {
    return this.http.get<Character>(`${this.urlC}/${id}`);
  }
}
