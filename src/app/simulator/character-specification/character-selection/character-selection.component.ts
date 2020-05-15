import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CharacterSelectionDialogComponent } from './character-selection-dialog/character-selection-dialog.component';
import { ICharacter } from 'src/app/models/ICharacter';

@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.scss']
})
export class CharacterSelectionComponent implements OnInit {

  @Output() characterSelected = new EventEmitter<ICharacter>();
  public ImageSRC = '';

  constructor(
    public dialog: MatDialog,
    ) { }

  ngOnInit() {
  }


  openDialog(): void {
    this.dialog.open(CharacterSelectionDialogComponent, { panelClass: 'custom-scrollable-dialog' })
    .afterClosed()
    .subscribe(result => {
      this.characterSelected.emit(result);
      this.ImageSRC = result.ImageSRC;
    });
  }
}
