import { Pipe, PipeTransform } from '@angular/core';
import { ICharacter } from 'src/app/models/ICharacter';

@Pipe({
  name: 'sortCharacterList'
})
export class SortCharacterListPipe implements PipeTransform {

  transform(allCharacters: ICharacter[], descending: boolean, sortBy: string): ICharacter[] {
    let sortedCharacters = allCharacters;
    if (sortBy !== null) {
      sortedCharacters = sortedCharacters.sort((a, b) => {
        if (descending && (sortBy === 'Name' || sortBy === 'Categories')) {
          return (a[sortBy] > b[sortBy]) ? 1 : ((a[sortBy] < b[sortBy]) ? -1 : 0);
        } else if (descending) {
          return (b[sortBy] > a[sortBy]) ? 1 : ((b[sortBy] < a[sortBy]) ? -1 : 0);
        } else if (sortBy === 'Name') {
          return (b[sortBy] > a[sortBy]) ? 1 : ((b[sortBy] < a[sortBy]) ? -1 : 0);
        } else {
          return (a[sortBy] > b[sortBy]) ? 1 : ((a[sortBy] < b[sortBy]) ? -1 : 0);
        }
      });
    }
    return sortedCharacters;
  }


}
