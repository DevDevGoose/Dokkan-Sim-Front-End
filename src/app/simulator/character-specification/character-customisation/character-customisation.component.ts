import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ICharacter } from 'src/app/models/ICharacter';
import { FormsModule, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-character-customisation',
  templateUrl: './character-customisation.component.html',
  styleUrls: ['./character-customisation.component.scss']
})
export class CharacterCustomisationComponent implements OnInit {
  public selectedCharacter;
  rainbow = false;
  freeDupe = false;
  topLeft = false;
  topRight = false;
  bottomLeft = false;
  bottomRight = false;
  @Output() freeDupeEvent = new EventEmitter<boolean>();
  @Output() topLeftEvent = new EventEmitter<boolean>();
  @Output() topRightEvent = new EventEmitter<boolean>();
  @Output() bottomLeftEvent = new EventEmitter<boolean>();
  @Output() bottomRightEvent = new EventEmitter<boolean>();
  @Output() rainbowEvent = new EventEmitter<boolean>();

  HPAdditionalFormControl = new FormControl('', Validators.required);
  HPCriticalFormControl = new FormControl('', Validators.required);

  additionalAttackNumbers = [0, 3, 6, 9, 12, 15];
  criticalNumbers = [0, 3, 6, 9, 12, 15];
  additionalSelectedOption = 0;
  criticalSelectedOption = 0;
  superAttackSelectedLevel = 10;

  @Input()
  set character(character: ICharacter) {
    this.selectedCharacter = character;
    if (this.selectedCharacter !== undefined) {
      this.setTypeHPModifier();
      if (this.superAttackSelectedLevel > this.selectedCharacter.MaxSA) {
        this.superAttackSelectedLevel = this.selectedCharacter.MaxSA;
      }
    }
  }


  constructor() { }

  ngOnInit() {
  }

  setTypeHPModifier() {
    if (this.selectedCharacter.Type === 'AGL' || this.selectedCharacter.Type === 'PHY') {
      if (this.topLeft === true && this.bottomRight === true) {
        this.additionalAttackNumbers = [5, 8, 11, 14, 17, 20];
        this.criticalNumbers = [0, 3, 6, 9, 12, 15];
        this.additionalSelectedOption = 11;
        this.criticalSelectedOption = 15;
      } else if (this.topLeft === true) {
        this.additionalAttackNumbers = [5, 8, 11];
        this.criticalNumbers = [0, 3, 6];
        this.additionalSelectedOption = 8;
        this.criticalSelectedOption = 6;
      } else if (this.bottomRight === true) {
        this.additionalAttackNumbers = [5, 8, 11, 14];
        this.criticalNumbers = [0, 3, 6, 9];
        this.additionalSelectedOption = 8;
        this.criticalSelectedOption = 9;
      } else if (this.freeDupe === true) {
        this.additionalAttackNumbers = [5];
        this.criticalNumbers = [0];
        this.additionalSelectedOption = 5;
        this.criticalSelectedOption = 0;
      } else {
        this.additionalAttackNumbers = [0];
        this.criticalNumbers = [0];
        this.additionalSelectedOption = 0;
        this.criticalSelectedOption = 0;
      }
    } else if (this.selectedCharacter.Type === 'TEQ' || this.selectedCharacter.Type === 'STR') {
      if (this.topLeft === true && this.bottomRight === true) {
        this.additionalAttackNumbers = [0, 3, 6, 9, 12, 15];
        this.criticalNumbers = [5, 8, 11, 14, 17, 20];
        this.additionalSelectedOption = 6;
        this.criticalSelectedOption = 20;
      } else if (this.topLeft === true) {
        this.additionalAttackNumbers = [0, 3, 6];
        this.criticalNumbers = [5, 8, 11];
        this.additionalSelectedOption = 3;
        this.criticalSelectedOption = 11;
      } else if (this.bottomRight === true) {
        this.additionalAttackNumbers = [0, 3, 6, 9];
        this.criticalNumbers = [5, 8, 11, 14];
        this.additionalSelectedOption = 3;
        this.criticalSelectedOption = 14;
      } else if (this.freeDupe === true) {
        this.additionalAttackNumbers = [0];
        this.criticalNumbers = [5];
        this.additionalSelectedOption = 0;
        this.criticalSelectedOption = 5;
      } else {
        this.additionalAttackNumbers = [0];
        this.criticalNumbers = [0];
        this.additionalSelectedOption = 0;
        this.criticalSelectedOption = 0;
      }
    } else if (this.selectedCharacter.Type === 'INT') {
      if (this.topLeft === true && this.bottomRight === true) {
        this.additionalAttackNumbers = [0, 3, 6, 9, 12, 15];
        this.criticalNumbers = [0, 3, 6, 9, 12, 15];
        this.additionalSelectedOption = 6;
        this.criticalSelectedOption = 15;
      } else if (this.topLeft === true) {
        this.additionalAttackNumbers = [0, 3, 6];
        this.criticalNumbers = [0, 3, 6];
        this.additionalSelectedOption = 3;
        this.criticalSelectedOption = 6;
      } else if (this.bottomRight === true) {
        this.additionalAttackNumbers = [0, 3, 6, 9];
        this.criticalNumbers = [0, 3, 6, 9];
        this.additionalSelectedOption = 3;
        this.criticalSelectedOption = 9;
      } else if (this.freeDupe === true) {
        this.additionalAttackNumbers = [0];
        this.criticalNumbers = [0];
        this.additionalSelectedOption = 0;
        this.criticalSelectedOption = 0;
      } else {
        this.additionalAttackNumbers = [0];
        this.criticalNumbers = [0];
        this.additionalSelectedOption = 0;
        this.criticalSelectedOption = 0;
      }
    }
  }

  setHPNumberOptions() {
    if (this.selectedCharacter !== undefined) {
      if (this.selectedCharacter.Type === 'AGL' || this.selectedCharacter.Type === 'PHY') {
        this.additionalAttackNumbers = [5];
        this.criticalNumbers = [0];
      } else if (this.selectedCharacter.Type === 'TEQ' || this.selectedCharacter.Type === 'STR') {
        this.additionalAttackNumbers = [0];
        this.criticalNumbers = [5];
      }
    }
  }

  clickedHPSlideToggle(event) {
    const target = event.source.name;
    switch (target) {
      case 'freeDupe':
        this.freeDupeEvent.emit(this.freeDupe);
        if (this.freeDupe === false) {
          this.topLeft = false;
          this.topRight = false;
          this.bottomLeft = false;
          this.bottomRight = false;
          this.rainbow = false;
        }
        break;

      case 'topLeft':
        this.topLeftEvent.emit(this.topLeft);
        if (this.topLeft === true) {
          this.freeDupe = true;
          if (this.topRight === true && this.bottomLeft === true && this.bottomRight === true) {
            this.rainbow = true;
          }
        } else {
          this.rainbow = false;
        }

        break;
      case 'topRight':
        this.topRightEvent.emit(this.topRight);
        if (this.topRight === true) {
          this.freeDupe = true;
          if (this.topLeft === true && this.bottomLeft === true && this.bottomRight === true) {
            this.rainbow = true;
          }
        } else {
          this.rainbow = false;
        }
        break;

      case 'bottomLeft':
        this.bottomLeftEvent.emit(this.bottomLeft);
        if (this.bottomLeft === true) {
          this.freeDupe = true;
          if (this.topRight === true && this.topLeft === true && this.bottomRight === true) {
            this.rainbow = true;
          }
        } else {
          this.rainbow = false;
        }
        break;

      case 'bottomRight':
        this.bottomRightEvent.emit(this.bottomRight);
        if (this.bottomRight === true) {
          this.freeDupe = true;
          if (this.topRight === true && this.bottomLeft === true && this.topLeft === true) {
            this.rainbow = true;
          }
        } else {
          this.rainbow = false;
        }
        break;

      case 'rainbow':
        this.rainbowEvent.emit(this.rainbow);
        if (this.rainbow === true) {
          this.freeDupe = true;
          this.topLeft = true;
          this.topRight = true;
          this.bottomLeft = true;
          this.bottomRight = true;
        }
        break;

      default:
        console.log('clickedHPSlideToggle broken');
        break;
    }
    if (this.selectedCharacter !== undefined) {
      this.setTypeHPModifier();
    }
  }



}
