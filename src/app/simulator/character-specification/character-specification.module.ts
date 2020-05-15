import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { CharacterSelectionComponent } from './character-selection/character-selection.component';
import { CharacterCustomisationComponent } from './character-customisation/character-customisation.component';
import { CharacterSpecificationComponent } from './character-specification.component';
import { MatFormFieldModule } from '@angular/material';
import { CharacterSelectionDialogComponent } from './character-selection/character-selection-dialog/character-selection-dialog.component';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CharacterSingleCustomisationComponent } from './character-single-customisation/character-single-customisation.component';



@NgModule({
  declarations: [
    CharacterSpecificationComponent,
    CharacterCustomisationComponent,
    CharacterSelectionComponent,
    CharacterSelectionDialogComponent,
    CharacterSingleCustomisationComponent
  ],

  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CharacterSpecificationComponent
  ],
  entryComponents: [
    CharacterSelectionDialogComponent
  ]
})
export class CharacterSpecificationModule { }
