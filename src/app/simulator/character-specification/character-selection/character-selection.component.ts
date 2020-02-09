import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CharacterSelectionDialogComponent } from './character-selection-dialog/character-selection-dialog.component';

@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.scss']
})
export class CharacterSelectionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(CharacterSelectionDialogComponent, dialogConfig);
  }
}
