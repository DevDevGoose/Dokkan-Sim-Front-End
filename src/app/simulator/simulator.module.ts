import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulatorComponent } from './simulator.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CharacterSpecificationModule } from './character-specification/character-specification.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SimulationSettingsComponent } from './simulation-settings/simulation-settings.component';



@NgModule({
  declarations: [SimulatorComponent, SimulationSettingsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    CharacterSpecificationModule,
    MatFormFieldModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [SimulatorComponent]
})
export class SimulatorModule { }
