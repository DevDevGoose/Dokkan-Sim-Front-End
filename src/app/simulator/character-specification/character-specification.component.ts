import { Component, OnInit, Input } from '@angular/core';


import { CharacterSelectionComponent } from './character-selection/character-selection.component';
import { CharacterCustomisationComponent } from './character-customisation/character-customisation.component';
import { ICharacter } from 'src/app/models/ICharacter';

@Component({
  selector: 'app-character-specification',
  templateUrl: './character-specification.component.html',
  styleUrls: ['./character-specification.component.scss']
})
export class CharacterSpecificationComponent implements OnInit {

  private selectedCharacter: ICharacter;
  @Input() simulationType: string;
  constructor() { }

  ngOnInit() {
  }

  characterSelected(character: ICharacter) {
    this.selectedCharacter = character;
  }

}
