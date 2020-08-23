import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ICharacter } from '../models/ICharacter';
import { InMemoryDataService } from './in-memory-data.service';



@Injectable({ providedIn: 'root' })
export class CharacterService {

  // // private charactersUrl = 'api/characters';  // URL to web api
  // characters: InMemoryDataService;
  // // httpOptions = {
  //   // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // // };

  // constructor(
  //   // private http: HttpClient,

  // ) { }

  // getCharacters() {
  //   this.characters.createDb();
  // }

  // searchCharacters(term: string): Observable<ICharacter[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return;
  // }

}
