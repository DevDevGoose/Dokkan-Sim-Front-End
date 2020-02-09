import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { CharacterSelectionComponent } from './character-selection/character-selection.component';
import { CharacterCustomisationComponent } from './character-customisation/character-customisation.component';
import { CharacterSpecificationComponent } from './character-specification.component';
import { MatFormFieldModule } from '@angular/material';
import { CharacterSelectionDialogComponent } from './character-selection/character-selection-dialog/character-selection-dialog.component';



@NgModule({
  declarations: [
    CharacterSpecificationComponent,
    CharacterCustomisationComponent,
    CharacterSelectionComponent,
    CharacterSelectionDialogComponent
  ],

  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  exports: [
    CharacterSpecificationComponent
  ],
  entryComponents: [
    CharacterSelectionDialogComponent
  ]
})
export class CharacterSpecificationModule { }
