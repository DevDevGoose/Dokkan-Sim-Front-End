import { Pipe, PipeTransform } from '@angular/core';
import { ICharacter } from 'src/app/models/ICharacter';

@Pipe({
  name: 'filteredCharacterList'
})
export class FilteredCharacterListPipe implements PipeTransform {

  transform(allCharacters: ICharacter[], searchTerm: string, type: string, clas: string,
            firstCategory: string, secondCategory: string, categoryOperator: string): ICharacter[] {

    let filteredCharacters = allCharacters;
    filteredCharacters = allCharacters.filter(
      character => character.Name.toLocaleLowerCase().includes(searchTerm)
        || character.Title.toLocaleLowerCase().includes(searchTerm));
    if (type !== '') {
      filteredCharacters = filteredCharacters.filter(character => character.Type === type);
    }
    if (clas !== '') {
      filteredCharacters = filteredCharacters.filter(character => character.Class === clas);
    }

    if (firstCategory !== '' && secondCategory !== '') {

      if (categoryOperator === 'and') {
        filteredCharacters = filteredCharacters.filter(
          character => character.Categories.includes(firstCategory) && character.Categories.includes(secondCategory)
        );
      } else {
        filteredCharacters = filteredCharacters.filter(
          character => character.Categories.includes(firstCategory) || character.Categories.includes(secondCategory)
        );
      }
    } else if (firstCategory !== '') {
      filteredCharacters = filteredCharacters.filter(
        character => character.Categories.includes(firstCategory)
      );
    } else if (secondCategory !== '') {
      filteredCharacters = filteredCharacters.filter(
        character => character.Categories.includes(secondCategory)
      );
    }

    console.log(filteredCharacters);

    // TODO Sorting
    // filteredCharacters = filteredCharacters.sort(this.compareATK);



    return filteredCharacters;
  }



}
