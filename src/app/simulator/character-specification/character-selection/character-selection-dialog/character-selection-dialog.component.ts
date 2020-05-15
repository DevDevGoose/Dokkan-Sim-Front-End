import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {MatTooltipModule } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import characters from '../../../../../assets/output.JSON';



@Component({
  selector: 'app-character-selection-dialog',
  templateUrl: './character-selection-dialog.component.html',
  styleUrls: ['./character-selection-dialog.component.scss']
})
export class CharacterSelectionDialogComponent implements OnInit {

  description: string;
  public characterList = characters;

  constructor(
    private dialogRef: MatDialogRef<CharacterSelectionDialogComponent>
    ) { }

  ngOnInit() {
    this.fillImageLocations();
  }

  fillImageLocations() {
    // TODO image service
    console.log('TODO image service');
  }

  selectCharacter(character) {
    this.dialogRef.close(character);
  }

}
