import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../services/simulation.service';
import { ICharacter, CombatCharacter } from '../models/ICharacter';
import { ISimulationSettings } from '../models/ISimulationSettings';
import { ITeamSettings } from '../models/ITeamSettings';


@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {
  selectedCharacter: ICharacter;
  combatCharacter: CombatCharacter;
  testCharacter: ICharacter;
  constructor() { }
  simulationService;
  simulationSettings: ISimulationSettings;
  teamSettings: ITeamSettings;

  ngOnInit() {
    this.testCharacter = {
      Name: 'Super Saiyan Trunks (Future) TEST CHANGES',
      Title: 'A Gift From the Past',
      // tslint:disable-next-line: max-line-length
      ImageSRC: 'https://vignette.wikia.nocookie.net/dbz-dokkanbattle/images/c/c7/Thumb_1014040.png/revision/latest/scale-to-width-down/120?cb=20181212001520',
      MaxLevel: 120,
      MaxSA: 20,
      Type: 'AGL',
      Class: 'Super',
      Cost: 38,
      ID: 11404,
      MaxHP: 6592,
      MaxATK: 9154,
      MaxDEF: 4771,
      LinkSkills: [
        'Messenger from the Future',
        'Super Saiyan',
        'Cold Judgment',
        'Royal Lineage',
        'Dismal Future',
        'Shattering the Limit'
      ],
      Categories: [
        'Hybrid Saiyans',
        'Future Saga',
        'Time Travelers',
        'Vegeta\'s Family',
        'Super Saiyans',
        'Androids/Cell Saga',
        'Bond of Master and Disciple',
        'Revenge'
      ],
      HiddenPotentialRank: 'A',
      Ki12MultiplierString: 140,
      transforms: false
    };

    this.simulationSettings = {
      NumberOfTurns: 10,
      NumberOfRepetitions: 3,
      SimulationType: 'Single'
    };

    this.teamSettings = {
      CharacterPosition: 1,
      ActiveLinks: [],
      LeaderSkill1(character: ICharacter) { character.Name = 'WORKING'; },
      LeaderSkill2(character: ICharacter) { }
    };

    this.resetCharacter();
    this.runSimulation();
  }

  onCharacterSelection(event: ICharacter) {
    this.selectedCharacter = event;
  }
  resetCharacter() {
    this.selectedCharacter = this.testCharacter;
  }

  runSimulation() {
    this.combatCharacter = new CombatCharacter(this.selectedCharacter);
    this.simulationService = new SimulationService([this.combatCharacter], this.simulationSettings, [], this.teamSettings);
    this.simulationService.simulate();
  }



}
