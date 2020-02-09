import { Component, OnInit } from '@angular/core';


import { CharacterSelectionComponent } from './character-selection/character-selection.component';
import { CharacterCustomisationComponent } from './character-customisation/character-customisation.component';

@Component({
  selector: 'app-character-specification',
  templateUrl: './character-specification.component.html',
  styleUrls: ['./character-specification.component.scss']
})
export class CharacterSpecificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
