import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormGroup, FormBuilder } from '@angular/forms';
import characters from '../../../../../assets/output.JSON';
import { ICharacter } from '../../../../models/ICharacter';
import { FilteredCharacterListPipe } from './filtered-character-list.pipe';
import { categories } from '../../../../../assets/categories';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-character-selection-dialog',
  templateUrl: './character-selection-dialog.component.html',
  styleUrls: ['./character-selection-dialog.component.scss']
})
export class CharacterSelectionDialogComponent implements OnInit {

  description: string;
  public characterList = characters;
  filteredCharacterList: ICharacter[];
  inputSearchString = '';
  typeSelected = '';
  classSelected = '';
  descending = true;
  orderBy = 'MaxATK';
  firstCategoryFilter = '';
  secondCategoryFilter = '';
  categoryOperator = 'and';
  categoriesDropdown = categories;

  constructor(
    private dialogRef: MatDialogRef<CharacterSelectionDialogComponent>
  ) { }

  ngOnInit() {
    this.filteredCharacterList = this.characterList;
  }


  selectCharacter(character) {
    this.dialogRef.close(character);
  }

  changeSortOrder() {
    this.descending = !this.descending;
  }


}
