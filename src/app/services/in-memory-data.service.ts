import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ICharacter } from '../models/ICharacter';
import characterList from '../../assets/output.JSON';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const characters = characterList;
    return {characters};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(characterList: ICharacter[]): number {
  //   return characterList.length > 0 ? Math.max(...characterList.map(character => character.ID)) + 1 : 11;
  // }
}