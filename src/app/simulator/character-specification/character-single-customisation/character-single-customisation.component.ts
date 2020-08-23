import { Component, OnInit, Input } from '@angular/core';
import { ICharacter } from 'src/app/models/ICharacter';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { links } from 'src/assets/links';

@Component({
  selector: 'app-character-single-customisation',
  templateUrl: './character-single-customisation.component.html',
  styleUrls: ['./character-single-customisation.component.scss']
})
export class CharacterSingleCustomisationComponent implements OnInit {

  @Input() character: ICharacter;
  linkSkills = links;
  slotControl = new FormControl();
  leaderSkillsControl = new FormControl();
  slotSelected = '1';


  leaderSkillGroups = [
    {
      name: '3 Ki',
      leaderSkills: [
        { value: '3ki177all', viewValue: '3Ki, 177% HP, ATK, DEF' },
        { value: '3ki170all', viewValue: '3Ki, 170% HP, ATK, DEF' },
        { value: '3ki150all', viewValue: '3Ki, 150% HP, ATK, DEF' },
        { value: '3ki130all', viewValue: '3Ki, 130% HP, ATK, DEF' },
        { value: '3ki120all', viewValue: '3Ki, 120% HP, ATK, DEF' }
      ]
    },
    {
      name: '4 Ki',
      leaderSkills: [
        { value: '4ki170all', viewValue: '170% HP, ATK, DEF' },
        { value: '4ki150all', viewValue: '150% HP, ATK, DEF' },
        { value: '4ki130all', viewValue: '130% HP, ATK, DEF' },
        { value: '4ki120all', viewValue: '120% HP, ATK, DEF' },
        { value: '4ki100all', viewValue: '100% HP, ATK, DEF' }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
