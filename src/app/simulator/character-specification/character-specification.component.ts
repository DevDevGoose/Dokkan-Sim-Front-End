import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { CharacterSelectionComponent } from './character-selection/character-selection.component';
import { CharacterCustomisationComponent } from './character-customisation/character-customisation.component';
import { ICharacter } from 'src/app/models/ICharacter';
import hiddenPotentialBoosts from '../../../assets/hiddenPotential.JSON';

@Component({
  selector: 'app-character-specification',
  templateUrl: './character-specification.component.html',
  styleUrls: ['./character-specification.component.scss']
})
export class CharacterSpecificationComponent implements OnInit {

  public selectedCharacter: ICharacter;
  @Input() simulationType: string;
  hiddenPotentialHPBoost = 0;
  hiddenPotentialATKBoost = 0;
  hiddenPotentialDEFBoost = 0;
  freeDupe = false;
  topLeft = false;
  topRight = false;
  bottomLeft = false;
  bottomRight = false;
  validatedCharacter: ICharacter;

  @Output() characterValidated = new EventEmitter<ICharacter>();

  constructor() { }

  ngOnInit() {
  }

  characterSelected(character: ICharacter) {
    this.selectedCharacter = character;
    this.calculateHiddenPotentialBoosts();
  }

  freeDupeEvent(event: boolean) {
    this.freeDupe = event;
    if (!event) {
      this.topLeft = event;
      this.topRight = event;
      this.bottomLeft = event;
      this.bottomRight = event;
    }
    this.calculateHiddenPotentialBoosts();
  }

  topLeftEvent(event: boolean) {
    this.topLeft = event;
    if (event) {
      this.freeDupe = event;
    }
    this.calculateHiddenPotentialBoosts();
  }

  topRightEvent(event: boolean) {
    this.topRight = event;
    if (event) {
      this.freeDupe = event;
    }
    this.calculateHiddenPotentialBoosts();
  }

  bottomLeftEvent(event: boolean) {
    this.bottomLeft = event;
    if (event) {
      this.freeDupe = event;
    }
    this.calculateHiddenPotentialBoosts();
  }

  bottomRightEvent(event: boolean) {
    this.bottomRight = event;
    if (event) {
      this.freeDupe = event;
    }
    this.calculateHiddenPotentialBoosts();
  }

  rainbowEvent(event: boolean) {
    if (event) {
      this.freeDupe = event;
      this.topLeft = event;
      this.topRight = event;
      this.bottomLeft = event;
      this.bottomRight = event;
    }

    this.calculateHiddenPotentialBoosts();
  }

  calculateHiddenPotentialBoosts() {
    this.hiddenPotentialHPBoost = 0;
    this.hiddenPotentialATKBoost = 0;
    this.hiddenPotentialDEFBoost = 0;
    if (this.selectedCharacter !== undefined) {
      const hpBoosts = hiddenPotentialBoosts.find(x => x.Type === this.selectedCharacter.Type)
        .Rank[this.selectedCharacter.HiddenPotentialRank];

      if (this.freeDupe) {
        this.hiddenPotentialHPBoost += hpBoosts['Free Dupe'].HP;
        this.hiddenPotentialATKBoost += hpBoosts['Free Dupe'].ATK;
        this.hiddenPotentialDEFBoost += hpBoosts['Free Dupe'].DEF;
      }

      if (this.topLeft) {
        this.hiddenPotentialHPBoost += hpBoosts['Top Left'].HP;
        this.hiddenPotentialATKBoost += hpBoosts['Top Left'].ATK;
        this.hiddenPotentialDEFBoost += hpBoosts['Top Left'].DEF;
      }

      if (this.topRight) {
        this.hiddenPotentialHPBoost += hpBoosts['Top Right'].HP;
        this.hiddenPotentialATKBoost += hpBoosts['Top Right'].ATK;
        this.hiddenPotentialDEFBoost += hpBoosts['Top Right'].DEF;
      }

      if (this.bottomLeft) {
        this.hiddenPotentialHPBoost += hpBoosts['Bottom Left'].HP;
        this.hiddenPotentialATKBoost += hpBoosts['Bottom Left'].ATK;
        this.hiddenPotentialDEFBoost += hpBoosts['Bottom Left'].DEF;
      }

      if (this.bottomRight) {
        this.hiddenPotentialHPBoost += hpBoosts['Bottom Right'].HP;
        this.hiddenPotentialATKBoost += hpBoosts['Bottom Right'].ATK;
        this.hiddenPotentialDEFBoost += hpBoosts['Bottom Right'].DEF;
      }

    }
    this.validateCharacter();
  }

  validateCharacter() {
    this.validatedCharacter = JSON.parse(JSON.stringify(this.selectedCharacter));
    this.validatedCharacter.MaxHP += this.hiddenPotentialHPBoost;
    this.validatedCharacter.MaxATK += this.hiddenPotentialATKBoost;
    this.validatedCharacter.MaxDEF += this.hiddenPotentialDEFBoost;
    this.characterValidated.emit(this.validatedCharacter);
  }
}
